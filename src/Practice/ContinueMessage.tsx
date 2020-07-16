import React from 'react'
import classNames from 'classnames'

export const ContinueMessage: React.FunctionComponent<{
  className?: string
}> = ({ className }) => (
  <p className={classNames(className, 'text-sm opacity-25')}>
    Press Enter or click on Card twice to continue...
  </p>
)
