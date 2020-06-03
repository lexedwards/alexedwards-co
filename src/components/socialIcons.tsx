import * as React from 'react'

import Dev from '../icons/dev.svg'
import Github from '../icons/github.svg'
import Insta from '../icons/instagram.svg'
import Linkd from '../icons/linkedin.svg'
import Twit from '../icons/twitter.svg'

interface Loader {
  icon: string
}

function IconLoader({ icon }: Loader) {
  switch (icon) {
    case 'dev':
      return (<Dev />)
    case 'github':
      return (<Github />)
    case 'instagram':
      return (<Insta />)
    case 'linkedin':
      return (<Linkd />)
    case 'twitter':
      return (<Twit />)
    default:
      return (<p>{`${icon} icon can not be found`}</p>)
  }
}

export default IconLoader