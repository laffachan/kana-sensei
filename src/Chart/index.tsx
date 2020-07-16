import React from 'react'
import { dict } from '../kana-dict'

export const Chart: React.FunctionComponent = () => (
  <div className="container flex justify-center mx-auto">
    <table className="my-16 bg-white border-2 border-collapse border-gray-400 dark:border-gray-800 dark:text-gray-600 dark:bg-black">
      <thead>
        <tr>
          {['Romaji', 'Hiragana', 'Katakana'].map((e) => (
            <th className="px-6 py-4 border border-b-2 dark:border-gray-800">
              {e}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        {Object.entries(dict).map(([romaji, { hiragana, katakana }]) => (
          <tr>
            <td className="p-1 border dark:border-gray-800">{romaji}</td>
            <td className="border dark:border-gray-800">{hiragana}</td>
            <td className="border dark:border-gray-800">{katakana}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
