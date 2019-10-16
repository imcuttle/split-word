/**
 * @file split-word
 * @author Cuttle Cong
 * @date 2019/10/14
 * @description
 */
// const {wordChunks, wordSlice, wordCount} = require('./index-fsm');
const { wordChunks, wordSlice, wordCount } = require('../index')

describe('split-word', function() {
  it('should split-word', () => {
    expect(wordChunks('hello world!')).toMatchInlineSnapshot(`
Array [
  "hello ",
  "world!",
]
`)

    expect(wordChunks('hello world。')).toMatchInlineSnapshot(`
Array [
  "hello ",
  "world",
  "。",
]
`)

    expect(wordChunks('你好upper case！')).toMatchInlineSnapshot(`
Array [
  "你",
  "好",
  "upper ",
  "case",
  "！",
]
`)

    expect(wordChunks('123 ')).toMatchInlineSnapshot(`
Array [
  "123 ",
]
`)
    expect(wordChunks('123 你好')).toMatchInlineSnapshot(`
Array [
  "123 ",
  "你",
  "好",
]
`)

    expect(wordChunks('  ')).toMatchInlineSnapshot(`Array []`)
    expect(wordChunks('')).toMatchInlineSnapshot(`Array []`)
  })

  it('wordslice', () => {
    expect(wordSlice('123 ', 0, 2)).toBe('123 ')
    expect(wordSlice('123 你好', 0, 2)).toBe('123 你')
  })

  it('should works on complex case', function() {
    expect(wordChunks('  你好 使劲儿')).toMatchInlineSnapshot(`
Array [
  "  你",
  "好 ",
  "使",
  "劲",
  "儿",
]
`)
  })
})
