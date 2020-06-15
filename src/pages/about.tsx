import * as React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { H1 } from '../components/styles/headings'
import renderAst from '../components/utils/Rehype'
import styled from 'styled-components'

interface AboutProps {
  data: {
    page: PageAbout
    pic: Bio
  }
}

const Rounded = styled.div`
border-radius: 50%;
width: 120px;
overflow: hidden;
margin-right: 20px;
`

const SplitView = styled.div`
display: flex;
flex-flow: column;
padding: 3rem 0;
@media (min-width: 640px) {
  flex-flow: row;
}
align-items: center;
`

const AboutPage: React.FC<AboutProps> = ({ data }) => {
  const meta = data.page.meta as Meta
  return (
    <>
      <Helmet>
        <title>{data.page?.blocks?.title} | Alex Edwards</title>
        <meta name="og:title" content={data.page?.blocks?.title} />
        <meta name="twitter:title" content={data.page?.blocks?.title} />
        <meta name="description" content={meta.desc.desc} />
        <meta name="og:description" content={meta.desc.desc} />
        <meta name="twitter:description" content={meta.desc.desc} />
      </Helmet>
      <SplitView>
        <Rounded>
          <Img fluid={data.pic?.profilePicture?.fluid} />
        </Rounded>
        <H1>{data.page?.blocks?.title}</H1>
      </SplitView>
      {renderAst(data.page?.blocks?.body?.childMarkdownRemark?.htmlAst)}
    </>
  )

}

export const query = graphql`
query About {
  page: contentfulPage(title: {regex: "/about/i"}) {
    id
    title
    meta {
      ... on ContentfulMeta {
        id
        desc {
          desc
        }
      }
    }
    blocks {
      ... on ContentfulPageAbout {
        id
        title
        body {
          childMarkdownRemark {
            htmlAst
          }
        }
      }
    }
  }
  pic: contentfulAuthor {
    profilePicture {
      fluid(maxWidth: 260) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage