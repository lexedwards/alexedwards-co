import * as React from 'react'
import { graphql } from 'gatsby'
import renderAst from '../components/utils/Rehype'
import { Helmet } from 'react-helmet'
import MetaTile from '../components/meta'
import ContentNav from '../components/ContentNav'
import SeriesBlock from '../components/SeriesBlock'


export const pageQuery = graphql`
query Post($id: String!) {
  post : contentfulPost(id: {eq: $id}) {
    title
    meta {
      id
      entryDate(fromNow : true)
      desc {
        desc
      }
      slug
      tags
      thumbnail {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    series {
      title
      post {
        title
        meta {
          id
          slug
          entryDate
        }
      }
    }
    body {
      childMarkdownRemark {
        htmlAst
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
}
`

interface PostTemplate {
  data: {
    post: Post
  }
  pageContext: {
    id?: string
    slug?: string
    collection?: string
    prev?: PostEdge
    next?: PostEdge
  }
}

function PostTemplate({ data, pageContext }: PostTemplate) {

  if (!data.post) { return <div>Opps! There should be a page here!</div> }

  const displayTitle = data.post.series ? `${data.post.title} | ${data.post.series.title}` : data.post.title

  return (
    <>
      <Helmet>
        <title>{data.post?.title} || Alex Edwards</title>
      </Helmet>
      <MetaTile
        entryDate={data.post?.meta?.entryDate}
        tags={data.post?.meta?.tags}
        fluidImage={data.post?.meta?.thumbnail?.fluid}
        title={displayTitle}
        readingTime={data.post?.body?.childMarkdownRemark?.fields?.readingTime?.text}
      />
      {data.post?.series && (
        <SeriesBlock
          postId={data.post?.meta?.id}
          series={data.post.series}
        />
      )}
      {renderAst(data?.post?.body?.childMarkdownRemark?.htmlAst)}
      <ContentNav prefix={''} prev={pageContext?.prev} next={pageContext?.next} />
    </>
  )
}

export default PostTemplate