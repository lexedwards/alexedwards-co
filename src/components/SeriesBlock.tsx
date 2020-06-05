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

const H5 = styled.h5`
font-size: ${props => props.theme.fontSize.md};
line-height: 1.2;
padding: 1rem;
margin: 0;
`

function sortByEntryDate(arr: PostArray[]): PostArray[] {
  arr.sort((a, b) => {
    const aDate = a.meta.entryDate as string
    const bDate = b.meta.entryDate as string
    return aDate.localeCompare(bDate)
  })
  return arr;
}

function SeriesBlock({ series }: SeriesI) {

  const postsInOrder = sortByEntryDate(series.post)

  // if (i > 4) return [1, {...}, 4, 5]
  if (postsInOrder.length > 4) {
    const [collapsed, setShowAll] = React.useState(true);

    return (
      <SeriesFrame>
        <H5>{series.title}</H5>
        <Link
          to={`/${postsInOrder[0].meta.slug}`}
          activeClassName='SeriesActive'
        >
          <Linkframe>{`1. ${postsInOrder[0].title}`}</Linkframe>
        </Link>
        <Link
          to={`/${postsInOrder[1].meta.slug}`}
          activeClassName='SeriesActive'
        >
          <Linkframe>{`2. ${postsInOrder[1].title}`}</Linkframe>
        </Link>
        {collapsed ? (
          <p onClick={() => setShowAll(false)}>…</p>
        ) : (
            postsInOrder.slice(2, -2).map((p, i) => {
              <Link
                to={`/${p.meta.slug}`}
                key={i}
                activeClassName='SeriesActive'
              >
                <Linkframe>{`${i + 1}.  ${p.title}`}</Linkframe>
              </Link>
            })
          )}
        <Link
          to={`/${postsInOrder[postsInOrder.length - 2].meta.slug}`}
          activeClassName='SeriesActive'
        >
          <Linkframe>{`${postsInOrder.length}. ${postsInOrder[postsInOrder.length - 2].title}`}</Linkframe>
        </Link>
        <Link
          to={`/${postsInOrder[postsInOrder.length - 1].meta.slug}`}
          activeClassName='SeriesActive'
        >
          <Linkframe>{`${postsInOrder.length}. ${postsInOrder[postsInOrder.length - 1].title}`}</Linkframe>
        </Link>
      </SeriesFrame>
    )
  }

  // If (i <= 4) return [1,2,3,4]
  return (
    <SeriesFrame>
      <H5>{series.title}</H5>
      {postsInOrder.map((p, i) => (
        <Link
          to={`/${p.meta.slug}`}
          key={i}
          activeClassName='SeriesActive'
        >
          <Linkframe>{`${i + 1}.  ${p.title}`}</Linkframe>
        </Link>
      ))
      }
    </SeriesFrame>
  )
}

export default SeriesBlock