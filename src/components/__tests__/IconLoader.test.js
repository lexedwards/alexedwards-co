import * as React from 'react'
import render from 'render'
import cases from 'jest-in-case'
import IconLoader from '../IconLoader'

cases(
  'Returns (icon) or fail',
  opts => {
    const { container } = render(<IconLoader icon={opts.icon} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <test-file-stub />
      </div>
    `)
  },
  [
    { name: 'Dev Icon', icon: 'dev' },
    { name: 'Github Icon', icon: 'github' },
    { name: 'Instagram Icon', icon: 'instagram' },
    { name: 'Linkedin Icon', icon: 'linkedin' },
    { name: 'Twitter Icon', icon: 'twitter' },
  ],
)

test('This shouldn\'t return an icon', () => {
  const { queryByText } = render(<IconLoader icon='' />)
  const failText = queryByText(/icon can not be found/i)
  expect(failText).toBeTruthy()
})
