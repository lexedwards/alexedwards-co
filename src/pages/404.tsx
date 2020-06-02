import * as React from 'react'
import Link from '../components/utils/Link'
import { Helmet } from 'react-helmet'
import { H1 } from '../components/styles/headings'

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Whoops!</title>
      </Helmet>
      <div>
        <H1>Whoops!</H1>
        <p>I&apos;m not sure what you&apos;re looking for; but I doubt it was this</p>
        <Link to="/">Take me home</Link>
      </div>
    </>
  )

}

export default Contact