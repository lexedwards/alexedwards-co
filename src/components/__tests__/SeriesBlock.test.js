import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {axe} from 'jest-axe'
import {ThemeProvider} from 'styled-components'
import {theme as GStheme} from '../styles/GlobalStyles'
import SeriesBlock from '../SeriesBlock'

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

const mockId = '3cd7ccf4-d40c-5562-a327-1d5e6cb157f9'
const mockSeries = {
  title: 'Series Title',
  post: [
    {
      title: 'Series #3',
      meta: {
        id: '3cd7ccf4-d40c-5562-a327-1d5e6cb157f9',
        slug: 'series3',
        entryDate: '2020-03-28',
      },
    },
    {
      title: 'Series #2',
      meta: {
        id: '2cd7ccf4-d40c-5562-a327-1d5e6cb157f9',
        slug: 'series2',
        entryDate: '2020-02-15',
      },
    },
    {
      title: 'Series #1',
      meta: {
        id: '1cd7ccf4-d40c-5562-a327-1d5e6cb157f9',
        slug: 'series1',
        entryDate: '2020-01-2',
      },
    },
  ],
}

test('Renders with no A11y Violations', async () => {
  const {container} = render(
    <SeriesBlock postId={mockId} series={mockSeries} />,
  )
  expect(await axe(container)).toHaveNoViolations()
})

test('Renders the Block', () => {
  const {getByRole} = render(
    <SeriesBlock postId={mockId} series={mockSeries} />,
  )
  const header = getByRole('heading')
  expect(header).toMatchInlineSnapshot(`
    <h4
      class="sc-AxhCb bUsZlQ"
    >
      Series Title
    </h4>
  `)
})

test('Renders 3 elements, highlighting current', () => {
  const {getByRole, getAllByRole} = render(
    <SeriesBlock postId={mockId} series={mockSeries} />,
  )
  const header = getByRole('heading')
  expect(header).toMatchInlineSnapshot(`
    <h4
      class="sc-AxhCb bUsZlQ"
    >
      Series Title
    </h4>
  `)

  const links = getAllByRole('link')
  expect(links).toHaveLength(3)
})

test('Renders 3 elements with an accordian between', () => {
  const {getAllByRole} = render(
    <SeriesBlock postId={mockId} series={mockSeries} />,
  )
  const links = getAllByRole('link')
  expect(links).toMatchInlineSnapshot(`
    Array [
      <a
        href="/series3"
      >
        Series #3
      </a>,
      <a
        href="/series2"
      >
        Series #2
      </a>,
      <a
        href="/series1"
      >
        Series #1
      </a>,
    ]
  `)
})
