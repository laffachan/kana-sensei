import React from 'react'
import classNames from 'classnames'

export function Section({ title, className, children }: any) {
  return (
    <section className={classNames('px-4', className)}>
      <div className="container py-20 mx-auto md:py-24">
        <h2 className="mb-12 text-4xl font-bold text-center">{title}</h2>
        {children}
      </div>
    </section>
  )
}
