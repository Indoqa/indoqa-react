import {BaseTheme, createFelaConfig} from '@indoqa/style-system'
import {render, RenderResult} from '@testing-library/react'
import {createRenderer} from 'fela'
import * as React from 'react'
import {RendererProvider, ThemeProvider} from 'react-fela'

const felaConfig = createFelaConfig()
export const renderer = createRenderer(felaConfig)

export const renderFelaComponent = <T extends BaseTheme>(wrappedComponent: React.ReactNode, theme: T): RenderResult => {
  return render(
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        {wrappedComponent}
      </ThemeProvider>
    </RendererProvider>,
  )
}
