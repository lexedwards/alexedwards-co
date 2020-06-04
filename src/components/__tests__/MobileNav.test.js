import * as React from 'react'
import render from 'render'
import MobileNav from '../MobileNav'
import { axe } from 'jest-axe'
import { MenuQuery } from 'MobileNavUtil'

test('Shoud render 4 items', () => {
  const { getAllByRole } = render(<MobileNav data={MenuQuery()} />)
  expect(getAllByRole('link')).toHaveLength(4)
})

test('A11y', async () => {
  const { container } = render(<MobileNav data={MenuQuery()} />)
  expect(await axe(container)).toHaveNoViolations()
})
