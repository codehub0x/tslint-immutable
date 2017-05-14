# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [v3.4.0] - 2017-05-14
### Added
- New rule `readonly-keyword`, to replace `readonly-interface` and `readonly-indexer` [#31](https://github.com/jonaskello/tslint-immutable/issues/31)

### Deprecated
- The `readonly-interface`, and `readonly-indexer` rules are deprecated and will be removed in the next major release. Please use the `readonly-keyword` rule instead.

## [v3.3.2] - 2017-05-13
### Fixed
- Functions in interfaces cannot have readonly specified but are still checked [#28](https://github.com/jonaskello/tslint-immutable/issues/28)

## [v3.3.1] - 2017-05-09
### Fixed
- patch: fix main file in package.json. Thanks to [@yonbeastie](https://github.com/yonbeastie). (see [#29](https://github.com/jonaskello/tslint-immutable/pull/29))

## [v3.3.0] - 2017-05-09
### Fixed
- ignore-local does not work for function assigned to const [#23](https://github.com/jonaskello/tslint-immutable/issues/23)

### Added
- Add default tslint json. Thanks to [@yonbeastie](https://github.com/yonbeastie). (see [#26](https://github.com/jonaskello/tslint-immutable/pull/26))

## [v3.2.0] - 2017-04-10
### Fixed
- readonly-array does not check shorthand syntax in return types with ignore-local option [#21](https://github.com/jonaskello/tslint-immutable/issues/21)

### Added
- Fixer for the `readonly-array` rule.

## [v3.1.2] - 2017-04-09
### Fixed
- readonly-array does not check return type when ignore-local is enabled [#16](https://github.com/jonaskello/tslint-immutable/issues/16)
- readonly-array does not check shorthand syntax [#20](https://github.com/jonaskello/tslint-immutable/issues/20).

## Changed
- Impicit return type is not checked in readonly-array [#18](https://github.com/jonaskello/tslint-immutable/issues/18).

## [v3.1.1] - 2017-04-05
### Fixed
- Function parameters are not checked when using ignore-local option, [#13](https://github.com/jonaskello/tslint-immutable/issues/13).
- Implicit Array type by default value for function parameter is not checked, [#14](https://github.com/jonaskello/tslint-immutable/issues/14).

## [v3.1.0] - 2017-04-05
### Added
- [`ignore-local`](https://github.com/jonaskello/tslint-immutable#using-the-ignore-local-option) option added to `readonly-array`.
- [`ignore-prefix`](https://github.com/jonaskello/tslint-immutable#using-the-ignore-local-option) option added to `readonly-array`.

## [v3.0.0] - 2017-04-02
### Changed
- Upgraded to tslint 5.0.0

### Added
- `readonly-array` now also checks for implicity declared mutable arrays.

## [v2.1.1] - 2017-03-29
### Fixed
- Remove vestigial `noMutationRule.js` and `no-mutation` example from README, thanks to [@pmlamotte](https://github.com/pmlamotte). (see [#6](https://github.com/jonaskello/tslint-immutable/pull/6))

## [v2.1.0] - 2016-12-12
### Added
- `readonly-indexer` rule.

### Fixed
- Fixed a bug in `readonly-interface` rule that made it fail on indexer declarations.

## [v2.0.0] - 2016-12-12
### Added
- `readonly-interface` rule.
- `readonly-indexer` rule.
- `readonly-array` rule.
- `no-class` rule.
- `no-new` rule.
- `no-mixed-interface` rule.
- `import-containment` rule.
- `no-arguments` rule.
- `no-label` rule.
- `no-semicolon-interface` rule.

### Removed
- `no-mutation` rule (replaced by the `readonly-interface` rule).

## v1.0.0 - 2016-12-10
### Added
- `no-expression-statement` rule.
- `no-let` rule.
- `no-mutation` rule.
- `no-this` rule.

[Unreleased]: https://github.com/jonaskello/tslint-immutable/compare/v3.4.0...master
[v3.4.0]: https://github.com/jonaskello/tslint-immutable/compare/v3.3.2...v3.4.0
[v3.3.2]: https://github.com/jonaskello/tslint-immutable/compare/v3.3.1...v3.3.2
[v3.3.1]: https://github.com/jonaskello/tslint-immutable/compare/v3.3.0...v3.3.1
[v3.3.0]: https://github.com/jonaskello/tslint-immutable/compare/v3.2.0...v3.3.0
[v3.2.0]: https://github.com/jonaskello/tslint-immutable/compare/v3.1.2...v3.2.0
[v3.1.2]: https://github.com/jonaskello/tslint-immutable/compare/v3.1.1...v3.1.2
[v3.1.1]: https://github.com/jonaskello/tslint-immutable/compare/v3.1.0...v3.1.1
[v3.1.0]: https://github.com/jonaskello/tslint-immutable/compare/v3.0.0...v3.1.0
[v3.0.0]: https://github.com/jonaskello/tslint-immutable/compare/v2.1.1...v3.0.0
[v2.1.2]: https://github.com/jonaskello/tslint-immutable/compare/v2.1.1...v2.1.2
[v2.1.1]: https://github.com/jonaskello/tslint-immutable/compare/v2.1.0...v2.1.1
[v2.1.0]: https://github.com/jonaskello/tslint-immutable/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/jonaskello/tslint-immutable/compare/v1.0.0...v2.0.0
