import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export const Button: React.FunctionComponent<{
  to: string
  className?: string
}> = ({ to, className, children }) => (
  <Link
    to={to}
    className={classNames(
      className,
      'px-4 py-4 text-2xl font-bold text-pink-200 bg-pink-500 rounded hover:bg-pink-700',
    )}
  >
    {children}
  </Link>
)
