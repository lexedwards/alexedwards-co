import * as React from 'react'
import Link from './utils/Link'
import IconLoader from './IconLoader'

interface MobileProps {
  data: {
    node: {
      title: string;
      meta: {
        slug: 'about' | 'portfolio' | 'posts' | 'contact';
      }
    }
  }[]
}

const expectedItems = {
  about: 'glasses',
  portfolio: 'labs',
  posts: 'posts',
  contact: 'chat'
}

const MobileNav: React.FC<MobileProps> = ({ data }) => {
  return (
    <nav>
      {data.map(item => {

        const slug = item.node.meta.slug

        return (
          <Link to={`/${slug}/`} key={slug} >
            <IconLoader icon={expectedItems[slug]} />
            <p>{item.node.title}</p>
          </Link>
        )

      })}
    </nav>
  )
}

export default MobileNav