import * as React from 'react'
import render from 'render'
import cases from 'jest-in-case'
import IconLoader from '../IconLoader'

cases(
  'Returns (icon) or fail',
  opts => {
    const { container } = render(<IconLoader icon={opts.icon} />)
    expect(container.querySelector('test-file-stub')).toHaveAttribute('alt')
    expect(container.querySelector('test-file-stub')).toHaveAttribute('aria-label')
  },
  [
    { name: 'Dev Icon', icon: 'dev' },
    { name: 'Github Icon', icon: 'github' },
    { name: 'Instagram Icon', icon: 'instagram' },
    { name: 'Linkedin Icon', icon: 'linkedin' },
    { name: 'Twitter Icon', icon: 'twitter' },
    { name: 'Glasses Icon', icon: 'glasses' },
    { name: 'Labs Icon', icon: 'labs' },
    { name: 'Posts Icon', icon: 'posts' },
    { name: 'Chat Icon', icon: 'chat' },
    { name: 'Config Icon', icon: 'config' },
    { name: 'Send Icon', icon: 'send' },
    { name: 'Star Icon', icon: 'star' },
  ],
)

test('This shouldn\'t return an icon', () => {
  const { queryByText } = render(<IconLoader icon='' />)
  const failText = queryByText(/icon can not be found/i)
  expect(failText).toBeTruthy()
})
