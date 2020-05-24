import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as Gatsby from 'gatsby'
import Footer from '../footer'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  "allContentfulPage": {
    "edges": [
      {
        "node": {
          "title": "About",
          "meta": {
            "slug": "about"
          }
        }
      },
      {
        "node": {
          "title": "Contact",
          "meta": {
            "slug": "contact"
          }
        }
      },
      {
        "node": {
          "title": "Homepage",
          "meta": {}
        }
      }
    ]
  },
  "allContentfulAuthorSocialLinks": {
    "edges": [
      {
        "node": {
          "devTo": "https://dev.to/_lexedwards",
          "github": "https://github.com/lexedwards/",
          "instagram": "https://instagram.com/lex_script",
          "linkedin": "https://www.linkedin.com/in/lexedwards/",
          "twitter": "https://twitter.com/_lexedwards"
        }
      }
    ]
  }
}));

test('It renders', () => {
  const { getByText } = render(<Footer />)
  expect(getByText(/menu/i)).toBeInTheDocument()
})

test('Passes A11y Testing', async () => {
  const { container } = render(<Footer />)
  expect(await axe(container)).toHaveNoViolations()
})