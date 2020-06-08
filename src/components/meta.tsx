import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { H1 } from './styles/headings'
import { P } from './styles/body'
import styled from 'styled-components'

interface MetaI {
  entryDate?: string
  tags?: string[]
  readingTime?: string
  fluidImage?: FluidObject
  title: string
}

const Dive = styled.div`
margin-top: 1.5rem;
`


function MetaTile({ entryDate, fluidImage, title, readingTime }: MetaI): React.ReactElement {
  return (
    <>
      {fluidImage && (<Img fluid={fluidImage} />)}
      <Dive>
        <H1>{title}</H1>
        <P>{entryDate} : {readingTime}</P>
      </Dive>
    </>
  )
}

export default MetaTile