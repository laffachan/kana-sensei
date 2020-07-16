import React from 'react'
import classNames from 'classnames'

const baseClassNames =
  'cursor-pointer flex justify-center items-center shadow-xl border-2 border-gray-400 rounded bg-white'
const darkClassNames = 'dark:border-gray-800 dark:bg-black dark:text-white'
const allClassNames = 'w-24 h-24 text-5xl'
const mediumClassNames = 'md:w-56 md:h-56 md:text-7xl'

export const Card: React.FunctionComponent<{
  onClick: any
  className: string
}> = ({ onClick, className, children }) => (
  <div
    onClick={onClick}
    className={classNames(
      baseClassNames,
      darkClassNames,
      allClassNames,
      mediumClassNames,
      className,
    )}
  >
    {children}
  </div>
)
