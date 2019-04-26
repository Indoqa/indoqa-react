import * as React from 'react'
import {render} from 'react-testing-library'
import {sum} from './foo'
import TestComponent from './TestComponent'

test('basic', () => {
  expect(sum()).toBe(0)
})

test('basic again', () => {
  expect(sum(1, 2)).toBe(3)
})

test('foo1', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
test('foo2', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
test('foo3', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
test('foo4', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
test('foo5', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
test('foo6', () => {
  const {container} = render(<TestComponent/>)
  const div = container.firstChild
  if (div) {
    expect(div.textContent).toBe('foo1')
  }
})
