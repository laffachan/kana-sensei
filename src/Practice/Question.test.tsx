import '@testing-library/jest-dom'
import {
  fireEvent,
  queryByTestId,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import React from 'react'
import { dict } from '../kana-dict'
import Question from './Question'

const kanaList = [
  ['あ', 'a'],
  ['い', 'i'],
]

const setup = (romaji: string) => {
  const utils = render(
    <Question dict={dict} field="hiragana" romaji={romaji} onNext={() => {}} />,
  )
  const input = utils.getByLabelText('textInput')
  const status = screen.getByTestId('status')
  return {
    status,
    input,
    ...utils,
  }
}

test('It should contain kana', () => {
  setup('i')
  expect(screen.getByText('い')).toBeInTheDocument()
})

test('It should be good', () => {
  const { input, status } = setup('i')
  fireEvent.change(input, { target: { value: 'i' } })
  waitFor(() => expect(queryByTestId(status, 'good')).toBeVisible())
})

test('It should be bad', () => {
  const { input, status } = setup('a')
  fireEvent.change(input, { target: { value: 'i' } })
  waitFor(() => expect(queryByTestId(status, 'bad')).toBeVisible())
})

test('It should handle unknown input', () => {
  const { input, status } = setup('a')
  fireEvent.change(input, { target: { value: 'xyz' } })
  expect(status).toHaveTextContent('')
})
