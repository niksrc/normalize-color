# normalize-color [![Build Status](https://travis-ci.org/niksrc/normalize-color.svg?branch=master)](https://travis-ci.org/niksrc/normalize-color)

> Normalize colors for use in terminals

Chalk Supports only basic 9 colors.This module takes any RGB color and converts it to a nearest color thats is supported by chalk.

## Install

```
$ npm install --save normalize-color
```


## Usage

```js
const normalizeColor = require('normalize-color');

normalizeColor({r: 128, g: 0, b: 0});
//=> 'red'
```

## API

### normalizeColor(input)

#### input

Type: `object`

{r: 128, g: 0 , b: 256}

## License

MIT © [Nikhil Srivastava](http://niksrc.github.io)
