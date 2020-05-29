import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { H1 } from './styles/headings'
import { UL, InlineLI, P } from './styles/body'

interface MetaI {
  entryDate?: string
  tags?: string[]
  fluidImage?: FluidObject
  title: string
}


function MetaTile({ entryDate, tags, fluidImage, title }: MetaI): React.ReactElement {
  return (
    <>
      <Img fluid={fluidImage as FluidObject} />
      <div>
        <H1>{title}</H1>
        <P>{entryDate}</P>
        <UL>
          {tags?.map(tag => (
            <InlineLI key={tag as string}>
              {tag}
            </InlineLI>
          ))}
        </UL>
      </div>
    </>
  )
}

export default MetaTile