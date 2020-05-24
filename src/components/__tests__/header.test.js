import React from 'react'
import { render } from '@testing-library/react'
import Header from '../header'
import { axe } from 'jest-axe'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  contentfulSiteMetadata: {
    title: 'Hello-Title'
  },
}));

function mockLocation(pathname = "/") {
  return { pathname }
}

test('It displays the correct title', () => {
  const { getByText } = render(<Header location={mockLocation()} />)
  expect(getByText(/hello\-title/i))
})

test('It has a CTA', () => {
  const { getByRole } = render(<Header location={mockLocation()} />)
  const button = getByRole('button')
  expect(button)
})

test('It can have a custom title', () => {
  const { getByText } = render(<Header location={mockLocation("/hello")} siteTitle="Hello" />)
  const title = getByText(/^alex edwards/i)
  expect(title).toBeInTheDocument()
})

test('Passes A11y Testing', async () => {
  const { container } = render(<Header location={mockLocation()} />)
  expect(await axe(container)).toHaveNoViolations()
})
