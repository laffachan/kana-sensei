import randomItem from 'random-item'

const emojis = [
  '😊',
  '🤓',
  '😃',
  '🤩',
  '🥳',
  '👍',
  '👏',
  '💪',
  '😍',
  '😁',
  '🤠',
]

export function randomEmoji() {
  return randomItem(emojis)
}

