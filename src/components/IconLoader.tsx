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
      return (<Dev alt='Dev.to logo' aria-label='Dev.to icon' {...rest} />)
    case 'github':
      return (<Github alt='Github.com logo' aria-label='Github icon' {...rest} />)
    case 'instagram':
      return (<Insta alt='Instagram logo' aria-label='Instagram icon' {...rest} />)
    case 'linkedin':
      return (<Linkd alt='Linkedin logo' aria-label='linkedin icon' {...rest} />)
    case 'twitter':
      return (<Twit alt='Twitter logo' aria-label='twitter icon' {...rest} />)
    case 'chat':
      return (<Chat alt='Chat Bubble' aria-label='A Chat bubble' {...rest} />)
    case 'config':
      return (<Config alt='Cog Gear' aria-label='Change settings' {...rest} />)
    case 'glasses':
      return (<Glasses alt='Glasses icon' aria-label='thick rimmed glasses' {...rest} />)
    case 'labs':
      return (<Labs alt='Beaker Icon' aria-label='a beaker' {...rest} />)
    case 'posts':
      return (<Posts alt='Documents' aria-label='A paper document' {...rest} />)
    case 'send':
      return (<Send alt='Paper Aeroplane' aria-label='Outline of a Paper Aeroplane' {...rest} />)
    case 'star':
      return (<Star alt='Yay, Stars!' aria-label='Yay, have a star' {...rest} />)
    default:
      return (<p>{`${icon} icon can not be found`}</p>)
  }
}

export default IconLoader