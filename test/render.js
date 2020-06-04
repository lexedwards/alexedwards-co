import * as React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme as GStheme } from '../src/components/styles/GlobalStyles'

function render(ui, { theme = GStheme, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  return {
    ...rtlRender(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  }
}

export default render