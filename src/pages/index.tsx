import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

const H1 = styled.h1`
font-size: ${props => props.theme.fontSize.xxxlg};
`
const H2 = styled.h2`
font-size: ${props => props.theme.fontSize.xxlg};
`
const H5 = styled.h5`
font-size: ${props => props.theme.fontSize.md};
`
const Color = styled.span`
color: hsl(199,88%,30%);
`
const Pos = styled.div`
margin: calc(30 * var(--vh)) 0;
`

const Rounded = styled.div`
border-radius: 50%;
width: 260px;
overflow: hidden;
margin-right: 20px;
`
const SplitView = styled.div`
display: flex;
align-items: center;
`

const IndexPage = ({ data }: PageProps) => {
  console.log(data)
  const blocks = data.allContentfulPage.edges[0].node.blocks;
  const subBlack = blocks.subTitle.split(' ').slice(0, 4).join(' ')
  const subColor = blocks.subTitle.split(' ').slice(4).join(' ')
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
          <Img fluid={blocks.authorBio.profilePicture.fluid} />
        </Rounded>
        <div style={{ maxWidth: '680px' }}>
          <H2>{blocks.authorBio.blurbTitle}</H2>
          <p>
            {blocks.authorBio.blurbDesc.blurbDesc} {
              blocks.authorBio.blurbLead ? <Link to="/about">{blocks.authorBio.blurbLead}</Link> : null}
          </p>
        </div>
      </SplitView>
    </>
  )
}

export const HomepageQuery = graphql`
query {
allContentfulPage(filter: {title: {regex: "/homepage/i"}}) {
edges {
  node {
    title
    blocks {
      ... on ContentfulPageHome {
        title
        subTitle
        authorBio {
          blurbTitle
          blurbDesc {
            blurbDesc
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
}
}
`

export default IndexPage
