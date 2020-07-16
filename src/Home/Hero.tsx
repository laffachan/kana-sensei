import randomItem from 'random-item'
import React from 'react'
import { ReactComponent as TraditionalMan } from '../assets/images/cute-japanese-man-traditional-by-Vexels.svg'
import { ReactComponent as SchoolGirl } from '../assets/images/cute-japanese-school-girl-by-Vexels.svg'
import { ReactComponent as TraditionalWoman } from '../assets/images/cute-japanese-woman-traditional-by-Vexels.svg'

const arr = [
  <TraditionalMan className="h-32" />,
  <SchoolGirl className="h-32" />,
  <TraditionalWoman className="h-32" />,
]

export const Hero: React.FunctionComponent<{ title: string; lead: string }> = ({
  title,
  lead,
  children,
}) => {
  return (
    <section className="px-4 bg-indigo-200 dark:bg-indigo-500">
      <div className="container max-w-xl pt-24 pb-32 mx-auto text-center text-indigo-900 md:pb-64 md:pt-32">
        <h1 className="mb-8 text-5xl font-bold">{title}</h1>
        <p className="mb-12 text-2xl text-indigo-800">{lead}</p>
        <div className="inline-block mb-16 opacity-50">{randomItem(arr)}</div>
        {children}
      </div>
    </section>
  )
}
