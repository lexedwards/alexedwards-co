import * as React from 'react'
import rehypeReact from 'rehype-react'
import * as Heading from '../styles/MD/headings'
import * as Body from '../styles/MD/body'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6,
    p: Body.P,
    blockquote: Body.BQ,
    table: Body.Table,
  }
}).Compiler;

export default renderAst