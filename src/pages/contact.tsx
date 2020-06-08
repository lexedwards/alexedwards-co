import * as React from 'react'
import { graphql } from 'gatsby'
import { H1 } from '../components/styles/headings'
import renderAst from '../components/utils/Rehype'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import IconLoader from '../components/IconLoader'
import Link from '../components/utils/Link'

interface ContactProps {
  data: {
    page: PageContact
    social: SocialLinks
  }
}

const Inner = styled.div`
max-width: 680px;
margin: 0 auto;
`

const Icons = styled.div`
max-width: 400px;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: space-between;
> * {
  flex: 1 1 auto;
  max-width: 4rem;
  margin: 0.25rem;
  fill: ${props => props.theme.neutral.n800};
}
`

const Contact: React.FC<ContactProps> = ({ data }) => {

  return (
    <>
      <Helmet>
        <title>{data.page?.blocks?.title}</title>
      </Helmet>
      <Inner>
        <H1>{data.page?.blocks?.title}</H1>
        {renderAst(data.page?.blocks?.body?.childMarkdownRemark?.htmlAst)}
        <Icons>
          {
            Object.entries(data.social as { [key: string]: string }).map(link => {
              return (
                <Link to={link[1]} key={link[0]} aria-label={`go to my ${link[0]}`}>
                  <IconLoader icon={link[0]} />
                </Link>
              )
            })
          }
        </Icons>
      </Inner>
    </>
  )

}

export const query = graphql`
query ContactPage {
  page: contentfulPage(title: {regex: "/contact/i"}) {
    meta {
      ... on ContentfulMeta {
        tags
        slug
      }
    }
    blocks {
      ... on ContentfulPageContact {
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
  social: contentfulAuthorSocialLinks {
    twitter
    github
    dev
    instagram
    linkedin
  }
}
`

export default Contact