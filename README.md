<div align="center">

# open-utils-lib

[![CI](https://github.com/RaizenXxx/open-utils-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/RaizenXxx/open-utils-lib/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/badge/npm-v1.2.0-blue)](https://www.npmjs.com/package/open-utils-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/RaizenXxx/open-utils-lib/pulls)

Lightweight, zero-dependency JavaScript utility functions for strings and numbers.

[Getting Started](#installation) | [API Reference](#api-reference) | [Examples](#examples) | [Contributing](#contributing)

</div>

---

## Why open-utils-lib?

- **Zero dependencies** - No bloat, no supply chain risk
- **Tree-shakeable** - Import only what you need
- **Fully tested** - 100% code coverage
- **TypeScript-ready** - Includes type definitions
- **Tiny footprint** - Under 2KB minified + gzipped

## Installation

```bash
npm install open-utils-lib
```

```bash
yarn add open-utils-lib
```

## Quick Start

```javascript
const { capitalize, truncate, clamp, random } = require('open-utils-lib');

// String utilities
capitalize('hello world');        // 'Hello world'
truncate('A very long text', 10); // 'A very lon...'

// Number utilities
clamp(150, 0, 100);  // 100
random(1, 6);        // Random integer between 1-6
```

### ES Modules

```javascript
import { capitalize, clamp } from 'open-utils-lib';
```

## API Reference

### String Utilities

#### `capitalize(str)`

Capitalizes the first character of a string.

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | Input string |

**Returns:** `string`

```javascript
capitalize('hello');  // 'Hello'
capitalize('');       // ''
capitalize('WORLD');  // 'WORLD' (only affects first char)
```

#### `truncate(str, maxLength)`

Truncates a string to the specified length, appending `...` if truncated.

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | Input string |
| `maxLength` | `number` | Maximum length before truncation |

**Returns:** `string`

```javascript
truncate('Hello World', 5);  // 'Hello...'
truncate('Hi', 10);          // 'Hi' (no truncation needed)
```

### Number Utilities

#### `clamp(value, min, max)`

Restricts a number to be within a specified range.

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `number` | The number to clamp |
| `min` | `number` | Minimum bound |
| `max` | `number` | Maximum bound |

**Returns:** `number`

```javascript
clamp(15, 0, 10);   // 10
clamp(-5, 0, 10);   // 0
clamp(5, 0, 10);    // 5
```

#### `random(min, max)`

Generates a random integer between min and max (inclusive).

| Parameter | Type | Description |
|-----------|------|-------------|
| `min` | `number` | Minimum value (inclusive) |
| `max` | `number` | Maximum value (inclusive) |

**Returns:** `number`

```javascript
random(1, 6);    // Dice roll: 1-6
random(0, 100);  // Percentage: 0-100
```

## Examples

See the [examples/](./examples) directory for more usage patterns:

- [Basic usage](./examples/basic-usage.js) - Common use cases

## Development

```bash
# Clone the repo
git clone https://github.com/RaizenXxx/open-utils-lib.git
cd open-utils-lib

# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint
npm run lint
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## Changelog

### v1.2.0
- Added `clamp()` and `random()` number utilities
- Added TypeScript type definitions

### v1.1.0
- Added `truncate()` string utility
- Improved test coverage

### v1.0.0
- Initial release with `capitalize()`

## License

[MIT](./LICENSE) - Made with care by [@RaizenXxx](https://github.com/RaizenXxx)