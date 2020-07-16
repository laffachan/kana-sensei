import classNames from 'classnames'
import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const baseClassNames =
  'inline-block py-2 px-4 border border-gray-400 shadow-inner rounded-md bg-white text-xl'
const mediumClassNames = 'md:text-3xl'
const darkClassNames = 'dark:bg-black dark:border-gray-800'

export const Input: React.FunctionComponent<{
  value: string
  emoji: string | undefined
  ariaLabel: string
  onChange: any
  disabled: boolean
  inputRef: any
  className: string
}> = ({ value, emoji, ariaLabel, onChange, disabled, inputRef, className }) => (
  <div
    className={classNames(
      className,
      baseClassNames,
      mediumClassNames,
      darkClassNames,
    )}
  >
    <DebounceInput
      debounceTimeout={300}
      type="text"
      className="w-16 font-bold uppercase bg-transparent outline-none md:w-32"
      minLength={1}
      maxLength={4}
      size={4}
      spellCheck={false}
      autoCapitalize="none"
      autoCorrect="off"
      autoComplete="off"
      onChange={onChange}
      aria-label={ariaLabel}
      value={value}
      disabled={disabled}
      inputRef={inputRef}
    />
    <div data-testid="status" className="inline-block w-10 text-right">
      {emoji}
    </div>
  </div>
)
