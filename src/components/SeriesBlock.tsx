import * as React from 'react'
import Link from './utils/Link'
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

const SeriesFrame = styled.nav`
display: flex;
flex-flow: column;
margin: 0 auto 1.5rem auto;
border: 2px solid ${props => props.theme.neutral.n500};
border-radius: 0.5rem;
overflow: hidden;
max-width: 30rem;
> a {
  border-top: 2px solid ${props => props.theme.neutral.n200};
  margin: 0;
  padding: 0 1rem;
  color: hsl(199,88%,30%);
  background: none;
  &.SeriesActive {
    background-color: hsl(199,88%,30%);
    color: ${props => props.theme.neutral.n50};
  }
}
`

const H6 = styled.h6`
font-size: 1rem;
line-height: 1.5;
padding: 1rem;
margin: 0;
`

function sortByEntryDate(arr: PostArray[]): PostArray[] {
  console.log(arr)
  arr.sort((a, b) => {
    const aDate = a.meta.entryDate as string
    const bDate = b.meta.entryDate as string
    return aDate.localeCompare(bDate)
  })
  return arr;
}

function SeriesBlock({ postId, series }: SeriesI) {

  const postsInOrder = sortByEntryDate(series.post);

  // if (i > 4) return [1, {...}, 4, 5]

  // If (i <= 4) return [1,2,3,4]
  return (
    <SeriesFrame>
      <H6>{series.title}</H6>
      {postsInOrder.map((p, i) => (
        <Link
          to={`/${p.meta.slug}/`}
          key={p.title}
          className={(p.meta.id === postId) ? 'SeriesActive' : ''}
        >
          <Linkframe>{`${i + 1}.  ${p.title}`}</Linkframe>
        </Link>
      ))
      }
    </SeriesFrame>
  )
}

export default SeriesBlock