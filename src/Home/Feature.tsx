import React from 'react'

export const FeatureItem: React.FunctionComponent<{
  title: string
  icon: React.ReactElement
}> = ({ title, icon, children }) => (
  <li className="flex flex-col items-center">
    <div className="p-3 mb-4 text-green-500 bg-green-300 rounded-full">
      {icon}
    </div>
    <h3 className="mb-3 font-bold">{title}</h3>
    <p className="opacity-75">{children}</p>
  </li>
)

export const FeatureList: React.FunctionComponent<{
  children: React.ReactElement<typeof FeatureItem>[]
}> = ({ children }) => (
  <ul className="grid md:grid-cols-2 gap-20">{children}</ul>
)
