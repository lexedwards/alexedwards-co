// gatsby-*.js files run in NodeJS

const React = require('react')
const Layout = require('./src/components/Layout').default
require('prismjs/themes/prism-tomorrow.css')
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./src/styles/codeBlocks.css")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onClientEntry = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}
