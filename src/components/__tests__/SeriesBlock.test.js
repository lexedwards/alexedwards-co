import * as React from 'react'
import render from 'render'
import {axe} from 'jest-axe'
import mockSeries from 'SeriesBlockUtil'
import SeriesBlock from '../SeriesBlock'

const mockId = '3'

test('Renders with no A11y Violations', async () => {
  const series = mockSeries()
  const {container} = render(<SeriesBlock postId={mockId} series={series} />)
  expect(await axe(container)).toHaveNoViolations()
})

test('Renders the Block', () => {
  const series = mockSeries(3)
  const {getByRole} = render(<SeriesBlock postId={mockId} series={series} />)
  const header = getByRole('heading')
  expect(header).toMatchInlineSnapshot(`
    <h5
      class="sc-AxiKw gSrnGH"
    >
      Series Title
    </h5>
  `)
})

test('Renders 3 elements, highlighting current', () => {
  const series = mockSeries()
  const {getByRole, getAllByRole} = render(
    <SeriesBlock postId={mockId} series={series} />,
  )
  const header = getByRole('heading')
  expect(header).toMatchInlineSnapshot(`
    <h5
      class="sc-AxiKw gSrnGH"
    >
      Series Title
    </h5>
  `)

  const links = getAllByRole('link')
  expect(links).toHaveLength(3)
})

test('Renders 4 elements with an accordian between', () => {
  const series = mockSeries(9)
  const {getAllByRole} = render(<SeriesBlock postId={mockId} series={series} />)
  const links = getAllByRole('link')
  expect(links).toMatchInlineSnapshot(`
    Array [
      <a
        href="/series1/"
      >
        <p
          class="sc-AxjAm jkJDfQ"
        >
          1. Series #1
        </p>
      </a>,
      <a
        href="/series2/"
      >
        <p
          class="sc-AxjAm jkJDfQ"
        >
          2. Series #2
        </p>
      </a>,
      <a
        href="/series8/"
      >
        <p
          class="sc-AxjAm jkJDfQ"
        >
          9. Series #8
        </p>
      </a>,
      <a
        href="/series9/"
      >
        <p
          class="sc-AxjAm jkJDfQ"
        >
          9. Series #9
        </p>
      </a>,
    ]
  `)
})
