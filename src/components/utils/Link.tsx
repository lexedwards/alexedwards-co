import * as React from 'react'
import { Link as GLink, navigate } from 'gatsby'

function Link({ children, to, href, activeClassName, partiallyActive, ...rest }: LinkComponent): React.ReactElement {
  const internal = /^\/(?!\/)/
  const file = /\.[0-9a-z]+$/i
  const local = /^[#?]/
  const ref = to || href;

  if (!ref) throw new Error('Need something to link to!')

  if (internal.test(ref)) {
    if (file.test(ref)) return (<a href={ref} download {...rest}>{children}</a>)
    if (local.test(ref)) return (<a onClick={() => { navigate(ref) }} {...rest}>{children}</a>)
    return (<GLink to={`${ref === '/' ? '' : ref}/`} activeClassName={activeClassName} partiallyActive={partiallyActive} {...rest}>{children}</GLink>)
  }

  // All else, this is an external link
  return <a href={ref} target="_blank" rel="noreferrer" {...rest}>{children}</a>

}

export default Link