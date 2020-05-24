import * as React from 'react'

import Header from './header'
import './layout.css'
import { Helmet } from 'react-helmet'
import Footer from './footer'

interface LayoutProps {
  location: { pathname: string }
  title: string
  children: React.ReactChildren
  className: string
  pageContext: {
    siteTitle?: string
  }
  path: string
}

function Layout({
  location,
  title,
  children,
  className,
  pageContext,
  path,
  ...rest
}: LayoutProps) {

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#ffc600" />
      </Helmet>
      <Header location={location} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: `80vh`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
