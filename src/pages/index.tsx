import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import { Helmet } from 'react-helmet'

const IndexPage = () => {

  return (
    <>
      <Helmet>
        <title>Alex Edwards | Full Stack JS Developer</title>
      </Helmet>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </>
  )
}

export default IndexPage
