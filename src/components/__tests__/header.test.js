import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import Header from '../header'
import { axe } from 'jest-axe'
import * as Gatsby from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { theme as GStheme } from '../styles/GlobalStyles'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  contentfulSiteMetadata: {
    description: 'Hello-Title'
  },
  allContentfulPage: {
    edges: [
      {
        node: {
          title: 'about',
          meta: {
            slug: "about"
          }
        }
      },
      {
        node: {
          title: 'contact',
          meta: {
            slug: "contact"
          }
        }
      }
    ]
  }
}));

function mockLocation(pathname = "/") {
  return { pathname }
}

function render(
  ui,
  {
    theme = GStheme,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    })
  }
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
