import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {axe} from 'jest-axe'
import {ThemeProvider} from 'styled-components'
import {theme as GStheme} from '../styles/GlobalStyles'
import ContentNav from '../ContentNav'

function render(ui, {theme = GStheme, ...renderOptions} = {}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  }
}

const mockNodes = {
  next: {
    node: {
      id: '86cc1d2d-185b-5493-aaeb-4a567db725c6',
      meta: {entryDate: '2020-04-24', slug: '2020-was-a-none-starter-for-me'},
      title: '2020 was a Non-Starter for Me',
    },
  },
  prev: {
    node: {
      id: '0d86d1f8-f662-5fd0-a66d-77206579f286',
      meta: {slug: 'testscript', entryDate: '2020-05-28'},
      title: 'Testscipt',
    },
  },
  pathPrefix: '',
}

test('Renders 2 links', () => {
  const {container, getAllByRole} = render(
    <ContentNav prev={mockNodes.prev} next={mockNodes.next} />,
  )
  const links = getAllByRole('link')
  expect(links).toHaveLength(2)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <nav
        class="sc-AxjAm ssodY"
      >
        <a
          href="/testscript"
        >
          ← Testscipt
        </a>
        <a
          href="/2020-was-a-none-starter-for-me"
        >
          2020 was a Non-Starter for Me →
        </a>
      </nav>
    </div>
  `)
})

test('Renders only 1 Link', () => {
  const {getAllByRole} = render(<ContentNav next={mockNodes.next} />)
  const links = getAllByRole('link')
  expect(links).toHaveLength(1)
})

test('No A11y Violations', async () => {
  const {container} = render(<ContentNav {...mockNodes} />)
  expect(await axe(container)).toHaveNoViolations()
})
