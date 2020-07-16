import randomItem from 'random-item'
import React, { useState } from 'react'
import { dict, DictField } from '../kana-dict'
import { Question } from './Question'

function randomRomaji() {
  return randomItem(Object.keys(dict))
}

export const Practice: React.FunctionComponent<{
  field: DictField
}> = ({ field }) => {
  const [romaji, setRomaji] = useState(randomRomaji())

  function onNext() {
    setRomaji(randomRomaji())
  }

  return <Question dict={dict} field={field} romaji={romaji} onNext={onNext} />
}
