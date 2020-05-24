import { useStaticQuery, graphql, Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'


const Header = styled.header`
margin-bottom: 1.45rem;
`

const InnerHead = styled.nav`
margin: 0 auto;
max-width: 1240px;
padding: 1.25rem 0rem;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #C6C6C6;
`

const H1 = styled.h1`
font-size: 1.563rem;
margin: 0;
`

const MenuLine = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
 > p {
   margin: 0;
   margin-right: 1rem;
 }
`

interface Props {
  siteTitle?: string
  location: {
    pathname: string
  }
}


const HeaderComponent = ({ location, siteTitle }: Props) => {

  const data = useStaticQuery(
    graphql`
      query {
        contentfulSiteMetadata {
          title
        }
      }
    `
  )

  const title = location.pathname === '/' ? data.contentfulSiteMetadata.title : `Alex Edwards | ${siteTitle}`


  return (
    <Header>
      <InnerHead>
        <H1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </H1>
        <MenuLine>
          <p>About</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <button role="button">Say Hello</button>
        </MenuLine>
      </InnerHead>
    </Header>
  )
}
export default HeaderComponent
