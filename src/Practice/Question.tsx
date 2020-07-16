import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Dict, DictField } from '../kana-dict'
import { Card } from './Card'
import { ContinueMessage } from './ContinueMessage'
import { Input } from './Input'
import { randomEmoji } from './randomEmoji'

export const Question: React.FunctionComponent<{
  dict: Dict
  field: DictField
  romaji: string
  onNext: () => void
}> = ({ dict, field, romaji, onNext }) => {
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [exist, setExist] = useState(true)
  const [emoji, setEmoji] = useState(randomEmoji())
  const [hasTimeout, setHasTimeout] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const textInput = useRef<HTMLInputElement>(null)

  useEffect(reset, [romaji])

  function reset() {
    setIsSolutionVisible(false)
    setIsAnswerCorrect(false)
    setExist(false)
    setEmoji(randomEmoji())
    setHasTimeout(false)
    setInputValue('')
  }

  function findKana(romaji: string): string | undefined {
    return dict[romaji]?.[field]
  }

  // Handle text input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
    const userKana = findKana(e.target.value)
    setExist(userKana !== undefined)

    // Correct answer
    if (e.target.value === romaji) {
      setIsAnswerCorrect(true)
      setHasTimeout(true)
      // Hide solution slightly before calling next
      window.setTimeout(() => setIsSolutionVisible(false), 700)
      // Next after hiding animation duration
      window.setTimeout(onNext, 700 + 300)
    }
  }

  // User has pressed Enter or has clicked a Card
  function submit() {
    if (isSolutionVisible) {
      setIsSolutionVisible(false)
      setHasTimeout(true)
      textInput.current?.focus()
      // Next after animation
      window.setTimeout(onNext, 300)
      return
    }

    if (isAnswerCorrect) {
      // Check if a next call is already scheduled
      if (!hasTimeout) {
        onNext()
      }
    } else {
      setIsSolutionVisible(true)
    }
  }

  // User has pressed Enter
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    submit()
  }

  const baseCardClassName =
    'absolute mx-auto left-0 right-0 transition transform duration-300 ease-out'

  const correctInputClassName =
    'border-green-800 bg-green-200 text-green-800 dark:border-teal-800 dark:bg-teal-200 dark:text-teal-800'

  const incorrectInputClassName =
    'border-pink-400 bg-pink-200 text-pink-800 dark:border-pink-600 dark:bg-pink-400 dark:text-pink-800'

  return (
    <div className="mt-24 text-center">
      {/* Cards */}
      <div className="relative h-32 mb-4 md:mb-24 md:h-56">
        <Card
          onClick={submit}
          className={classNames(baseCardClassName, 'z-10 shadow-xl', {
            '-translate-x-12 md:-translate-x-24 -rotate-10': isSolutionVisible,
          })}
        >
          {findKana(romaji)}
        </Card>
        <Card
          onClick={submit}
          className={classNames(
            baseCardClassName,
            'uppercase shadow-md opacity-75',
            {
              'translate-x-12 md:translate-x-24 rotate-10': isSolutionVisible,
            },
          )}
        >
          {romaji}
        </Card>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          emoji={exist ? (!isAnswerCorrect ? findKana(inputValue) : emoji) : ''}
          ariaLabel="textInput"
          onChange={handleChange}
          disabled={hasTimeout}
          className={classNames('mb-4', {
            [correctInputClassName]: exist && isAnswerCorrect,
            [incorrectInputClassName]: exist && !isAnswerCorrect,
          })}
          inputRef={textInput}
        />
        <ContinueMessage />
      </form>
    </div>
  )
}

export default Question
