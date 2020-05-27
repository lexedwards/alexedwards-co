import { useStaticQuery, graphql, Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'


const Header = styled.header`
margin-bottom: 1.45rem;
`

const InnerHead = styled.div`
margin: 0 auto;
max-width: 1240px;
padding: 1.25rem 0rem;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #C6C6C6;
`

const H1 = styled.h1`
font-size: ${props => props.theme.fontSize.lg};
margin: 0;
color: ${props => props.theme.neutral.n900};
`

const MenuLine = styled.nav`
display: flex;
justify-content: flex-end;
align-items: center;
 > *:not(:last-child) {
   margin: 0;
   margin-right: 1rem;
   color: ${props => props.theme.neutral.n700};
 }
 > a.button {
  color: white;
  background-color: hsl(204,50%,44%);
  font-size: ${props => props.theme.fontSize.sm};
  :hover {
    background-color: hsl(199,88%,30%);
  }
 }
`

interface Props {
  siteTitle?: string
  location: {
    pathname: string
  }
  context?: {
    siteTitle?: string
  };
}

interface PageInt {
  node: {
    title: string
    description: string
    meta: {
      slug: string
    }
  }
}

const HeaderComponent = ({ location, context }: Props) => {

  const data = useStaticQuery(
    graphql`
query {
  contentfulSiteMetadata {
    title
    description
  }
  allContentfulPage(filter: { isTopLevel: { eq: true } }, sort: { fields: title }) {
    edges {
      node {
        title
        meta {
              ...on ContentfulMeta {
            slug
          }
        }
      }
    }
  }
}
`
  )

  const title = `Alex Edwards | ${location.pathname === '/' ? data.contentfulSiteMetadata.description : context?.siteTitle}`


  return (
    <Header>
      <InnerHead>

        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <H1>{title}</H1>
        </Link>
        <MenuLine>
          {data.allContentfulPage.edges.map((page: PageInt) => {
            if (!page.node.meta.slug) return undefined;
            if (page.node.meta.slug === 'contact') return (
              <Link
                to={`/${page.node.meta.slug}`}
                className="button"
                key={page.node.meta.slug}
                role="button">
                Say Hello
              </Link>
            )
            return (
              <Link to={`/${page.node.meta.slug}`} key={page.node.title}>
                <p>
                  {page.node.title}
                </p>
              </Link>
            )
          }
          )}
        </MenuLine>
      </InnerHead>
    </Header>
  )
}
export default HeaderComponent
