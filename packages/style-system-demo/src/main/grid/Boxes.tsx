import {Box, PStyle} from '@indoqa/style-system'
import * as React from 'react'
import {StyleFunction} from 'react-fela'
import {Theme} from '../app/theme'

const boxStyle: StyleFunction<Theme> = ({theme}): PStyle => {
  return {
    ...theme.fontStyles.base,
    fontSize: theme.fontSizes.verySmall,
    height: 100,
  }
}

const Box1: React.FC = ({children}) => (
  <Box bg="accent" p={1} fullWidth fullHeight style={boxStyle}>{children}</Box>
)

const Box2: React.FC = ({children}) => (
  <Box bg="primaryLight" p={1} fullWidth fullHeight style={boxStyle}>{children}</Box>
)

const Box3: React.FC = ({children}) => (
  <Box bg="primary" p={1} fullWidth fullHeight style={boxStyle}>{children}</Box>
)

export {Box1, Box2, Box3}
