import * as React from 'react'
import Link from './utils/Link'
import { H4 } from './styles/headings'
import styled from 'styled-components'

export type PostArray = {
  title: string;
  meta: {
    [key: string]: string
  }
}

interface SeriesI {
  postId: string
  series: {
    title: string
    post: PostArray[]
  }
}

const Linkframe = styled.p`
  font-weight: 600;
`

function SeriesBlock({ postId, series }: SeriesI) {
  return (
    <div>
      <H4>{series.title}</H4>
      {series.post.reverse().map((p, i) => {
        return (<Link
          to={`/${p.meta.slug}`}
          key={p.title}
        >
          <Linkframe>{`${i + 1}. `}{(p.meta.id === postId) ? ` > ${p.title}` : p.title}</Linkframe>
        </Link>)
      })}
    </div>
  )
}

export default SeriesBlock