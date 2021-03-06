import * as React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { H2 } from '../components/styles/headings'
import Link from '../components/utils/Link'
import { P } from '../components/styles/body'
import styled from 'styled-components'

interface Props {
  data: {
    allPosts: AllPosts
    siteMeta: Page
  }
  pageContext: {
    prefix: string
  }
}

function PostsTemplate({ data, pageContext }: Props) {
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
      {data.allPosts.edges.map(post => (
        <Block key={post.node?.meta.slug}>
          {post.node?.meta.thumbnail && (<Img fluid={{ ...post.node?.meta.thumbnail.fluid, aspectRatio: 21 / 9 }} />)}
          <Link to={`${pageContext.prefix}/${post.node?.meta.slug}`}>
            <H2>{post.node?.title}</H2>
          </Link>
          <P>{post.node?.meta.entryDate} : {post.node?.body.childMarkdownRemark.fields.readingTime.text}</P>
          <P>{post.node?.meta.desc.childMarkdownRemark.rawMarkdownBody}</P>
        </Block>
      ))}
    </>
  )
}

const Block = styled.div`
margin-bottom: 3rem;
h2 {
   margin : 0; 
}
`

export default PostsTemplate

export const postsQuery = graphql`
  query Posts {
    allPosts : allContentfulPost (sort: {order: DESC, fields: meta___entryDate}) {
      edges {
        node {
          title
          meta {
            tags
            slug
            entryDate(formatString: "Do MMMM, 'YY")
            desc {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            thumbnail {
              fluid(maxWidth: 960) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
          body {
            childMarkdownRemark {
              fields {
                readingTime {
                  text
                }
              }
            }
          }
        }
      }
    }
    siteMeta: contentfulPage(title: {regex: "/posts/i"}) {
    title
    meta {
      ... on ContentfulMeta {
        desc {
          desc
        }
        entryDate
        slug
        tags
        }
      }
    }
  }
`