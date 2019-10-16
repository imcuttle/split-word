/**
 * Splits words like Microsoft word with state machine
 * @author imcuttle
 */
import StateMachine from 'javascript-state-machine'

function isWordString(str) {
  return /^[\x00-\xff]+$/.test(str) && !isSpaceString(str)
}

function isSpaceString(str) {
  return /^\s+$/.test(str)
}

export function wordCount(string) {
  return wordChunks(string).length
}

export function wordSlice(string, start, end) {
  const chunks = wordChunks(string)
  return chunks.slice(start, end).join('')
}

export function charType(char) {
  if (isSpaceString(char)) {
    return 'space'
  }
  if (isWordString(char)) {
    return 'ascii-word'
  }
  return 'ready'
}

export function wordChunks(string) {
  let fsm = new StateMachine({
    init: 'none',
    data: {
      word: '',
      chunks: [],
      append: function(char) {
        this.word += char
      },
      pushAndReset: function(char) {
        this.chunks.push(this.word)
        this.word = char
      }
    },
    transitions: [
      { name: 'bye', from: '*', to: 'end' },
      { name: 'eat', from: 'none', to: ch => charType(ch) },
      { name: 'eat', from: 'space', to: ch => charType(ch) },
      {
        name: 'eat',
        from: 'ascii-word',
        to: ch => {
          if (charType(ch) === 'ascii-word') {
            return 'ascii-word'
          }
          return 'ready'
        }
      },
      {
        name: 'eat',
        from: 'ready',
        to: ch => {
          if (charType(ch) === 'ascii-word') {
            return 'ascii-word'
          }
          return 'ready'
        }
      }
    ],
    methods: {
      onBye: function({ from, to }) {
        if (to === 'end') {
          switch (from) {
            case 'ascii-word':
            case 'ready':
              this.pushAndReset()
              break
          }
        }
      },
      onEat: function({ from, to, transition }, char) {
        const type = charType(char)
        switch (from) {
          case 'ascii-word':
            if (type === 'ready') {
              this.pushAndReset(char)
            } else {
              this.append(char)
            }
            break
          case 'ready':
            if (type === 'space') {
              this.append(char)
            } else {
              this.pushAndReset(char)
            }
            break
          default:
            this.append(char)
        }
      }
    }
  })

  for (let i = 0; i < string.length; i++) {
    fsm.eat(string[i])
  }
  fsm.bye()

  return fsm.chunks
}
