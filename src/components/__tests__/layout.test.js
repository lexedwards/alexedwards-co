import React from 'react'
import { render } from '@testing-library/react'
import * as Gatsby from 'gatsby'
import Layout from '../Layout'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  contentfulSiteMetadata: {
    title: 'Hello-Title'
  },
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

const testData = "Testing Title"

test('it renders Children', () => {
  const { getByText } = render(
    <Layout location={{ pathname: "/" }}>
      <p>{testData}</p>
    </Layout>
  )
  expect(getByText(testData)).toBeInTheDocument()
})