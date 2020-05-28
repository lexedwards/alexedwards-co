import * as React from 'react'

import Header from './header'
import { Helmet } from 'react-helmet'
import Footer from './footer'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles, { theme } from './styles/GlobalStyles'

interface LayoutProps {
  location: { pathname: string }
  title: string
  children: React.ReactChildren
  className: string
  pageContext?: {
    siteTitle?: string
  }
  path: string
  data: {
    contentfulSiteMetadata: {
      title: string
      description: string
    }
    allContentfulPage: {
      edges: pageEdges[]
    }
    allContentfulAuthorSocialLinks: {
      edges: [
        {
          node: {
            "devTo": string
            "github": string
            "instagram": string
            "linkedin": string
            "twitter": string
          }
        }
      ]
    }
  }
}

type pageEdges = {
  node: {
    title: string
    meta: {
      slug: string
    }
  }
}

const Main = styled.main`
margin: 0 auto;
max-width: 960px;
min-height: calc(80 * var(--vh));
`

function Layout({
  location,
  title,
  children,
  pageContext
}: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&family=Source+Code+Pro&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#ffc600" />
      </Helmet>
      <Header location={location} context={pageContext} />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
