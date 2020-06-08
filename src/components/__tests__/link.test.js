import render from 'render'
import * as React from 'react'
import cases from 'jest-in-case'
import Link from '../utils/Link'

cases(
  'It returns valid links',
  opts => {
    const { getByRole } = render(<Link to={opts.to}>This is a link</Link>)
    const anchor = getByRole('link')
    expect(anchor).toHaveTextContent(/this is a link/i)
    expect(anchor).toHaveAttribute('href')
    for (let i = 0; i < opts.assert; i++) {
      expect(anchor).toHaveAttribute(opts.assert[i])
    }
  },
  {
    'Internal Link': {
      to: '/somewhere',
    },
    'File Link': {
      to: '/file.pdf',
      assert: [
        'download'
      ]
    },
    'Local page Navigation': {
      to: '#Header',
    },
    'External Link "//"': {
      to: '//google.com',
      assert: [
        'target', 'rel'
      ]
    },
    'External Link "http"': {
      to: 'http://google.com',
      assert: [
        'target', 'rel'
      ]
    },
    'External Link "www"': {
      to: "www.google.com",
      assert: [
        'target', 'rel'
      ]
    }
  }
)