import * as React from 'react'
import Link from './utils/Link'
import styled from 'styled-components'

interface ContentI {
  prefix?: string
  prev?: PostEdge
  next?: PostEdge
}

const Nav = styled.nav`
font-family: 'Roboto', sans-serif;
font-weight: normal;
line-height: 1.5;
display: flex;
flex-flow: column;

> a {
  margin: 1.5rem 0;
  align-self: center;
}

@media (min-width: 640px) {
  flex-flow: row;
  justify-content: space-around;
}
`

function ContentNav({ prefix = '', prev, next }: ContentI) {

  return (
    <Nav>
      {prev && (
        <Link className="prev" to={`${prefix}/${prev.node.meta.slug}`}>{`← ${prev.node.title}`}</Link>
      )}
      {next && (
        <Link className="next" to={`${prefix}/${next.node.meta.slug}`}>{`${next.node.title} →`}</Link>
      )}
    </Nav>
  )
}

export default ContentNav