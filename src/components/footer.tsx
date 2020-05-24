import { useStaticQuery, graphql, Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

interface PageInt {
  node: {
    title: string
    meta: {
      slug: string
    }
  }
}

const Foot = styled.footer`
display: flex;
justify-content: center;
max-width: 1240px;
margin: 0 auto 2.5rem auto;
border-top: 1px solid #C6C6C6;
padding: 2.5rem 0;
 > * {
   width: 120px;
   :not(:last-child) {
    margin-right: 20px
  }
 }
`

const H6 = styled.h6`
font-weight: bold;
font-size: 1rem;
`

function Footer() {

  const MenuItems = useStaticQuery(graphql`
    query{
      allContentfulPage(filter: {isTopLevel: {eq: true}},  sort: {fields: title}) {
        edges {
          node {
            title
            meta {
          ... on ContentfulMeta {
            slug
          }
        }
          }
        }
      }
      allContentfulAuthorSocialLinks {
        edges {
          node {
            devTo
            github
            instagram
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <Foot>
      <div>
        <H6>Menu</H6>
        {MenuItems.allContentfulPage.edges.map((page: PageInt) => (
          <Link to={page.node.meta.slug} key={page.node.title}>
            <p>
              {page.node.title}
            </p>
          </Link>
        ))}
      </div>
      <div>
        <H6>Social Links</H6>
        {Object.entries(MenuItems.allContentfulAuthorSocialLinks.edges[0].node).map((link) => (
          <a key={link[0]} href={link[1] as string} target="_blank" rel="noreferrer">
            <p>{link[0]}</p>
          </a>
        ))}
      </div>
      <div>
        <H6>Built With:</H6>
        <p>Figma</p>
        <p>Gatbsy</p>
        <p>Contentful</p>
        <p>Github</p>
        <p>Netlify CI/CD</p>
      </div>
    </Foot>
  )
}

export default Footer