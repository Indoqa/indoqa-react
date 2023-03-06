import {Box, Flex} from '@indoqa/style-system'
import * as React from 'react'
import {StyleFunction} from 'react-fela'
import {Theme} from '../app/theme'

interface BoxProps {
  boxBackground: string
  width: number | string
  height: number | string
}

interface Props {
  height?: number | string
  width?: number | string
  boxProp?: BoxProps
}

const bgBoxStyle = (boxBackground: string, width: number | string, height: number | string): StyleFunction<Theme> => {
  return ({theme}) => {
    return {
      ...theme.fontStyles.base,
      fontSize: Array.isArray(theme.fontSizes.verySmall) ? theme.fontSizes.verySmall[0] : theme.fontSizes.verySmall,
      backgroundColor: boxBackground,
      width,
      height,
    }
  }
}

const OrangeBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '75px', children}) => {
  return (
    <Box p={1} style={bgBoxStyle('orange', width, height)}>
      {children}
    </Box>
  )
}

const YellowBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '75px', children}) => {
  return (
    <Box p={1} style={bgBoxStyle('yellow', width, height)}>
      {children}
    </Box>
  )
}

const BlueBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '75px', children}) => {
  return (
    <Box p={1} style={bgBoxStyle('blue', width, height)}>
      {children}
    </Box>
  )
}

const RedBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '75px', children}) => {
  return (
    <Box p={1} style={bgBoxStyle('red', width, height)}>
      {children}
    </Box>
  )
}

const BlueFlexBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '75px', children}) => {
  return (
    <Flex p={2} style={bgBoxStyle('blue', width, height)} justifyContent="space-between">
      {children}
    </Flex>
  )
}

const UnsetHeightBox: React.FC<React.PropsWithChildren<Props>> = ({width = '100%', height = '100%', children}) => {
  return (
    <Box p={1} style={bgBoxStyle('yellow', width, height)}>
      {children}
    </Box>
  )
}

export {OrangeBox, YellowBox, BlueBox, RedBox, BlueFlexBox, UnsetHeightBox}
