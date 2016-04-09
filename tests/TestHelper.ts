import * as Lint from 'tslint/lib/lint';
import Linter = require('tslint');
import fs = require('fs');
import chai = require('chai');

export interface FailurePosition {
  character:number;
  line:number;
  position?:number;
}
export interface ExpectedFailure {
  ruleName:string;
  name:string;
  failure:string;
  endPosition?:FailurePosition;
  startPosition:FailurePosition;
}
export function assertNoViolation(ruleName:string, inputFileOrScript:string) {
  runRuleAndEnforceAssertions(ruleName, null, inputFileOrScript, []);
}
export function assertNoViolationWithOptions(ruleName:string, options:any[], inputFileOrScript:string) {
  runRuleAndEnforceAssertions(ruleName, options, inputFileOrScript, []);
}
export function assertViolationsWithOptions(ruleName:string, options:any[], inputFileOrScript:string,
                                            expectedFailures:ExpectedFailure[]) {
  runRuleAndEnforceAssertions(ruleName, options, inputFileOrScript, expectedFailures);
}
export function assertViolations(ruleName:string, inputFileOrScript:string, expectedFailures:ExpectedFailure[]) {
  runRuleAndEnforceAssertions(ruleName, null, inputFileOrScript, expectedFailures);
}

function runRuleAndEnforceAssertions(ruleName:string, userOptions:string[], inputFileOrScript:string,
                                     expectedFailures:ExpectedFailure[]) {

  var configuration = {
    rules: {}
  };
  if (userOptions != null && userOptions.length > 0) {
    //options like `[4, 'something', false]` were passed, so prepend `true` to make the array like `[true, 4, 'something', false]`
    configuration.rules[ruleName] = (<any[]>[true]).concat(userOptions);
  } else {
    configuration.rules[ruleName] = true;
  }

  var options:Lint.ILinterOptions = {
    formatter: 'json',
    configuration: configuration,
    rulesDirectory: 'js_out/',
    formattersDirectory: 'customFormatters/'
  };

  var linter:Linter;
  if (inputFileOrScript.match(/.*\.ts/)) {
    var contents = fs.readFileSync(inputFileOrScript, 'utf8');
    linter = new Linter(inputFileOrScript, contents, options);
  } else {
    linter = new Linter('file.ts', inputFileOrScript, options);
  }

  var result:Lint.LintResult = linter.lint();

  var actualFailures:ExpectedFailure[] = JSON.parse(result.output);

  // All the information we need is line and character of start position. For JSON comparison
  // to work, we will delete the information that we are not interested in from both actual and
  // expected failures.
  actualFailures.forEach((actual:ExpectedFailure):void => {
    delete actual.startPosition.position;
    delete actual.endPosition;
    // Editors start counting lines and characters from 1, but tslint does it from 0.
    // To make thing easier to debug, aling to editor values.
    actual.startPosition.line = actual.startPosition.line + 1;
    actual.startPosition.character = actual.startPosition.character + 1;
  });
  expectedFailures.forEach((expected:ExpectedFailure):void => {
    delete expected.startPosition.position;
    delete expected.endPosition;
  });

  var errorMessage = 'Wrong # of failures: \n' + JSON.stringify(actualFailures, null, 2);
  chai.assert.equal(expectedFailures.length, actualFailures.length, errorMessage);

  expectedFailures.forEach((expected:ExpectedFailure, index:number):void => {
    var actual = actualFailures[index];
    chai.assert.deepEqual(actual, expected);
  });
}
