# open-utils-lib

> Lightweight JavaScript string and number utility functions with zero dependencies.

## Installation

```bash
npm install open-utils-lib
```

## Usage

```javascript
const { capitalize, truncate, clamp, random } = require('open-utils-lib');

capitalize('hello');       // 'Hello'
truncate('long text', 5); // 'long ...'
clamp(15, 0, 10);         // 10
random(1, 100);           // random number between 1-100
```

## API

### Strings
- `capitalize(str)` - Capitalize first letter
- `truncate(str, len)` - Truncate string with ellipsis

### Numbers
- `clamp(num, min, max)` - Clamp number within range
- `random(min, max)` - Generate random integer in range

## License

MIT