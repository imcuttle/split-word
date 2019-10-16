# split-word

[![Build status](https://img.shields.io/travis/imcuttle/split-word/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/split-word)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/split-word.svg?style=flat-square)](https://codecov.io/github/imcuttle/split-word?branch=master)
[![NPM version](https://img.shields.io/npm/v/split-word.svg?style=flat-square)](https://www.npmjs.com/package/split-word)
[![NPM Downloads](https://img.shields.io/npm/dm/split-word.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/split-word)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> Splits words like Microsoft word with state machine

## Installation

```bash
npm install split-word
# or use yarn
yarn add split-word
```

## Usage

```javascript
const { wordChunks, wordCount, wordSlice } = require('split-word')

wordCount('你好 hello world') // => 4
wordChunks('你好 hello world') // => ['你', '好 ', 'hello ', 'world']
wordSlice('你好 hello world', 0, 2) // => '你好 '
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
