import * as React from 'react'

import Dev from '../icons/dev.svg'
import Github from '../icons/github.svg'
import Insta from '../icons/instagram.svg'
import Linkd from '../icons/linkedin.svg'
import Twit from '../icons/twitter.svg'
import Chat from '../icons/chat.svg'
import Config from '../icons/config.svg'
import Glasses from '../icons/glasses.svg'
import Labs from '../icons/labs.svg'
import Posts from '../icons/posts.svg'
import Send from '../icons/send.svg'
import Star from '../icons/star.svg'

interface Loader {
  icon: string
}

function IconLoader({ icon, ...rest }: Loader) {
  switch (icon) {
    case 'dev':
      return (<Dev {...rest} />)
    case 'github':
      return (<Github {...rest} />)
    case 'instagram':
      return (<Insta {...rest} />)
    case 'linkedin':
      return (<Linkd {...rest} />)
    case 'twitter':
      return (<Twit {...rest} />)
    case 'chat':
      return (<Chat {...rest} />)
    case 'config':
      return (<Config {...rest} />)
    case 'glasses':
      return (<Glasses {...rest} />)
    case 'labs':
      return (<Labs {...rest} />)
    case 'posts':
      return (<Posts {...rest} />)
    case 'send':
      return (<Send {...rest} />)
    case 'star':
      return (<Star {...rest} />)
    default:
      return (<p>{`${icon} icon can not be found`}</p>)
  }
}

export default IconLoader