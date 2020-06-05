import * as React from 'react'
import Link from './utils/Link'
import IconLoader from './IconLoader'
import styled from 'styled-components'

interface MobileProps {
  data: {
    node: {
      title: string;
      meta: {
        slug: 'about' | 'portfolio' | 'posts' | 'contact';
      }
    }
  }[]
  location?: string
}

const expectedItems = {
  about: 'glasses',
  portfolio: 'labs',
  posts: 'posts',
  contact: 'chat'
}

const Nav = styled.nav`
position: fixed;
left: 0;
bottom: 0;
display: flex;
justify-content: space-evenly;
width: 100%;
background: ${props => props.theme.neutral.n50};
> a {
  flex: 1 1;
  margin-left:0.25rem;
  margin-right:0.25rem;
  text-align: center;
}
a:hover, a.current {
  svg {
    fill: hsl(10,50%,50%);
  }
}
svg {
  width: 24px;
  height: 24px;
  margin: 0.5rem;
  stroke: ${props => props.theme.neutral.n800};
}
p {
  margin : 0 0 0.25rem 0;
  color: ${props => props.theme.neutral.n800};
}
`

const MobileNav: React.FC<MobileProps> = ({ data, location }) => {
  return (
    <Nav>
      {data.map(item => {

        const slug = item.node.meta.slug
        return (
          <Link to={`/${slug}`} key={slug} className={location === `/${slug}` ? 'current' : ''}>
            <IconLoader icon={expectedItems[slug]} />
            <p>{item.node.title}</p>
          </Link>
        )

      })}
    </Nav>
  )
}

export default MobileNav