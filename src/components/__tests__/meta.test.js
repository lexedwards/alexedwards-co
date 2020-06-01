import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { axe } from 'jest-axe'
import Meta from '../meta'
import { ThemeProvider } from 'styled-components'
import { theme as GStheme } from '../styles/GlobalStyles'

function render(
  ui,
  {
    theme = GStheme,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    })
  }
}

const mockMeta = {
  entryDate: "a day ago",
  slug: "testscript",
  desc: {
    desc: "Testing templating"
  },
  tags: ['this', 'is-a', 'test'],
  fluidImage: {
    "aspectRatio": 1.5037593984962405,
    "sizes": "(max-width: 800px) 100vw, 800px",
    "src": "/static/5d1995b81dcaa430663c3060ed343006/14b42/david-travis-WC6MJ0kRzGw-unsplash.jpg",
    "srcSet": "/static/5d1995b81dcaa430663c3060ed343006/f836f/david-travis-WC6MJ0kRzGw-unsplash.jpg 200w,\n/static/5d1995b81dcaa430663c3060ed343006/2244e/david-travis-WC6MJ0kRzGw-unsplash.jpg 400w,\n/static/5d1995b81dcaa430663c3060ed343006/14b42/david-travis-WC6MJ0kRzGw-unsplash.jpg 800w,\n/static/5d1995b81dcaa430663c3060ed343006/a6352/david-travis-WC6MJ0kRzGw-unsplash.jpg 960w",
    "tracedSVG": "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='267'%20viewBox='0%200%20400%20267'%20preserveAspectRatio='none'%3e%3cpath%20d='M307%2040l-31%202-1%207c0%2010-1%2013-2%206l-1-8c1-6%201-6-11-5l-36%201h-25v11c0%209%200%2010-2%2010l-1-10c0-10%200-10-2-11h-36l-34%201-1%209-1%2015v5l-1-5-1-15V43H49a903%20903%200%2000-2%20127c-1%2018%200%2026%203%2026h14c31-1%2031-1%2026%204-4%203-9%2013-9%2016l1%2012%203%2024%201%2015h56l2-5%204-14%2010-34h5c3%201%205%200%208-1%205-2%205-4%201-8l-4-3h4l6-1%204-3%209%204%2010%204%201%201%201%201%2024%2011c3%202%205%201%208-6a2590%202590%200%200123-49c9-18%209-17%200-21l-9-4-1-1-4-2c-7-2-28-13-28-14l3-1h5a1157%201157%200%200140-3h10l1%203v67l3%202c2%203%203%203%208%203l34-1c25%200%2028%200%2030-2l1-27a5586%205586%200%2001-3-123l-6-1-35%201'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e"
  },
  title: "This is simply a test!"
}

test('it renders without fault', () => {
  const { getByText } = render(<Meta {...mockMeta} />)
  const title = getByText(mockMeta.title)
  expect(title).toBeInTheDocument()
})

test('It has not A11y Violations', async () => {
  const { container } = render(<Meta {...mockMeta} />)
  expect(await axe(container)).toHaveNoViolations()
})