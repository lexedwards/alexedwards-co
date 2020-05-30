import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { H1 } from './styles/headings'
import { InlineList, P, LI } from './styles/body'

interface MetaI {
  entryDate?: string
  tags?: string[]
  readingTime?: string
  fluidImage?: FluidObject
  title: string
}


function MetaTile({ entryDate, tags, fluidImage, title, readingTime }: MetaI): React.ReactElement {
  return (
    <>
      {fluidImage && (<Img fluid={fluidImage as FluidObject} />)}
      <div>
        <H1>{title}</H1>
        <P>{entryDate} : {readingTime}</P>
        <InlineList>
          {tags?.map(tag => (
            <LI key={tag as string}>
              {tag}
            </LI>
          ))}
        </InlineList>
      </div>
    </>
  )
}

export default MetaTile