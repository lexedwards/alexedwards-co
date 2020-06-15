import * as React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import renderAst from '../components/utils/Rehype'
import Link from '../components/utils/Link'
import { H2 } from '../components/styles/headings'
import { InlineList } from '../components/styles/body'
import styled from 'styled-components'

interface Props {
  data: {
    allLabs: AllLabItems
    siteMeta: Page
  }
  pageContext: {
    prefix: string
  }
}

const Main = styled.div`
@media (min-width: 40rem) {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
}
`

const Links = styled.div`
display: flex;
> :not(:last-child) {
  margin-right: 20px;
}
`

export default function Labs({ data }: Props) {
  const meta = data.siteMeta.meta as Meta
  return (
    <>
      <Helmet>
        <title>{data.siteMeta.title} | Alex Edwards</title>
        <meta name="og:title" content={data.siteMeta.title} />
        <meta name="twitter:title" content={data.siteMeta.title} />
        <meta name="description" content={meta.desc.desc} />
        <meta name="og:description" content={meta.desc.desc} />
        <meta name="twitter:description" content={meta.desc.desc} />
      </Helmet>
      {data.allLabs.edges.map(lab => (
        <Main key={lab.node.title}>
          {lab.node.meta.thumbnail && (<Img fluid={{ ...lab.node.meta.thumbnail?.fluid, aspectRatio: 21 / 9 }} />)}
          <div>
            <H2>{lab.node.title}</H2>
            <InlineList>
              {lab.node.meta.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </InlineList>
            {renderAst(lab.node.meta.desc.childMarkdownRemark.htmlAst)}
            <Links>
              <Link to={lab.node.liveUrl}><p>Visit Live Site</p></Link>
              <Link to={lab.node.repo}><p>Source Repo</p></Link>
              {lab.node.post && <Link to={`/${lab.node.post.meta.slug}`}><p>Write up</p></Link>}
            </Links>
          </div>
        </Main>
      ))}
    </>
  )
}


export const LabsQuery = graphql`
  query Labs {
    allLabs: allContentfulLabItem(sort: {order: DESC, fields: meta___entryDate}) {
      edges {
        node {
          title
          meta {
            tags
            desc {
              desc
              childMarkdownRemark {
                htmlAst
              }
            }
            entryDate(formatString: "Do MMMM, 'YY")
            slug
            thumbnail {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
          repo
          liveUrl
          post {
            meta {
              slug
            }
          }
        }
      }
    }
    siteMeta: contentfulPage(title: {regex: "/lab/i"}) {
    title
    meta {
      ... on ContentfulMeta {
        desc {
          desc
          childMarkdownRemark {
            htmlAst
          }
        }
        entryDate
        slug
        tags
        }
      }
    }
  }
`
