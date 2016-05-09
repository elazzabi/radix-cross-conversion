# radix-cross-conversion [![Build Status](https://travis-ci.org/elazzabi/radix-cross-conversion.svg?branch=master)](https://travis-ci.org/elazzabi/radix-cross-conversion)

> Convert numbers from and to different bases

## Install

```
$ npm install --save radix-cross-conversion
```

## Usage

```js
const Radix = require('radix-cross-conversion');

let ten = new Radix(10);
ten.to(2).value; // Simple conversion
//=> '1010'

ten.from(2).to(16).value; // Method chaining
//=> 'a'

```

## Testing

```
$ npm test
```

## License

MIT © [EL AZZABI Ahmed](http://elazzabi.com)
