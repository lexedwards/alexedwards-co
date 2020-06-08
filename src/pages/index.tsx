import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import renderAst from '../components/utils/Rehype'
import { H1, H2, H5 } from '../components/styles/headings'

const Color = styled.span`
color: hsl(199,88%,30%);
`
const Pos = styled.div`
margin: 2rem;
@media (min-width: 640px) {
  margin: 250px 0;
}
`

const Rounded = styled.div`
border-radius: 50%;
width: 260px;
overflow: hidden;
margin-right: 20px;
`
const SplitView = styled.div`
display: flex;
flex-flow: column;
@media (min-width: 640px) {
  flex-flow: row;
}
align-items: center;
`

interface HomepageProps {
  data: {
    page: PageHome
  }
}

const IndexPage: React.FC<HomepageProps> = ({ data }) => {
  const blocks = data.page.blocks;
  const subBlack = blocks?.subTitle?.split(' ').slice(0, 4).join(' ')
  const subColor = blocks?.subTitle?.split(' ').slice(4).join(' ')
  return (
    <>
      <Helmet>
        <title>Alex Edwards | Full Stack JS Developer</title>
      </Helmet>
      <Pos>
        <H1>{blocks?.title}✌️</H1>
        <H5>{subBlack} <Color>{subColor}</Color></H5>
      </Pos>
      <SplitView>
        <Rounded>
          <Img fluid={blocks?.authorBio?.profilePicture?.fluid} />
        </Rounded>
        <div style={{ maxWidth: '680px' }}>
          <H2>{blocks?.authorBio?.blurbTitle}</H2>
          {renderAst(blocks?.authorBio?.blurbDesc?.childMarkdownRemark?.htmlAst)}
        </div>
      </SplitView>
    </>
  )
}

export const query = graphql`
query Homepage {
  page: contentfulPage(title: {regex: "/homepage/i"}) {
    title
    blocks {
      ... on ContentfulPageHome {
        title
        subTitle
        authorBio {
          blurbTitle
          blurbDesc {
            childMarkdownRemark {
              htmlAst
            }
          }
          blurbLead
          profilePicture {
            fluid(maxWidth: 260) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
