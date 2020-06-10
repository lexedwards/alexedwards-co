import * as React from 'react'
import Link from './utils/Link'
import IconLoader from './IconLoader'
import styled from 'styled-components'

interface MobileProps {
  data: {
    node: {
      title: string;
      meta: {
        slug: 'about' | 'labs' | 'posts' | 'contact';
      }
    }
  }[]
  location?: string
}

const expectedItems = {
  about: 'glasses',
  labs: 'labs',
  posts: 'posts',
  contact: 'chat'
}

const Nav = styled.nav`
position: fixed;
left: 0;
bottom: 0;
z-index: 900;
display: flex;
justify-content: space-evenly;
width: 100%;
background: ${props => props.theme.neutral.n50};
border-top: 2px solid ${props => props.theme.neutral.n200};
> a {
  flex: 1 1;
  margin-left:0.25rem;
  margin-right:0.25rem;
  text-align: center;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: transparent;
}
a:hover, a.current {
  svg {
    fill: hsl(199,88%,60%);
  }
}
a.current {
  border-color: hsl(199,88%,60%);
}
svg {
  width: 1rem;
  height: 1rem;
  margin: 0.5rem;
  stroke: ${props => props.theme.neutral.n800};
}
p {
  margin : 0 0 0.25rem 0;
  font-size: 0.75rem;
  color: ${props => props.theme.neutral.n800};
}
`

const MobileNav: React.FC<MobileProps> = ({ data }) => {
  return (
    <Nav>
      {data.map(item => {
        const slug = item.node.meta.slug
        if (slug === 'contact') item.node.title = 'Say Hello'
        return (
          <Link to={`/${slug}`} key={slug} activeClassName='current' >
            <IconLoader icon={expectedItems[slug]} />
            <p>{item.node.title}</p>
          </Link>
        )

      })}
    </Nav>
  )
}

export default MobileNav