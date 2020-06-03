# [pa11y-runner-curlylint](https://www.npmjs.com/package/pa11y-runner-curlylint) [![npm](https://img.shields.io/npm/v/pa11y-runner-curlylint.svg)](https://www.npmjs.com/package/pa11y-runner-curlylint) [![Build Status](https://travis-ci.com/thibaudcolas/pa11y-runner-curlylint.svg?branch=master)](https://travis-ci.com/thibaudcolas/pa11y-runner-curlylint) [![Total alerts](https://img.shields.io/lgtm/alerts/g/thibaudcolas/pa11y-runner-curlylint.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-curlylint/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/thibaudcolas/pa11y-runner-curlylint.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-curlylint/context:javascript)

> Pa11y runner for HTML linting with [curlylint](https://github.com/thibaudcolas/curlylint).

## Usage

> 🚧 Currently the runner is only compatible with PR [#524 – Add lower-level runner API to support non-browser runners](https://github.com/pa11y/pa11y/pull/524), and on my fork [thibaudcolas/pa11y#feature/node-runners](https://github.com/thibaudcolas/pa11y#feature/node-runners).

**curlylint first needs to be installed separately.** Then,

```sh
npm install -g https://github.com/thibaudcolas/pa11y#feature/node-runners pa11y-runner-curlylint
```

With `curlylint`, Pa11y, and the runner installed,

```sh
pa11y --runner curlylint https://www.example.com/
```

## Why

curlylint isn’t an accessibility checker like other Pa11y runners – it’s a general-purpose templates linter. Nonetheless, it contains linting rules that are related to accessibility, and code smell rules that can help maintain codebases.

## Contributing

See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Please have a look at our [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

View the full list of [contributors](https://github.com/thibaudcolas/pa11y-runner-curlylint/graphs/contributors). [MIT](LICENSE) licensed.
