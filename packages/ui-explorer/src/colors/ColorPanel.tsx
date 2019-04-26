import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface Props extends WithUIETheme {
  color?: string,
  name: string,
}

const toHexString = (color: string) => {
  return color.startsWith('#') ? color.substr(1) : color
}

/* tslint:disable:no-bitwise */
// tslint:disable-next-line
/* see https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color */
const calcTextColor = (color?: string) => {
  if (!color) {
    return '#fff'
  }
  const bigint = parseInt(toHexString(color), 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255
  return (red * 0.299 + green * 0.587 + blue * 0.114) > 180 ? '#000' : '#fff'
}

const ColorPanel = ({color, name, uieTheme}: Props) => {
  const textColor = calcTextColor(color)
  const style: IStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '12rem',
    height: '7rem',
    backgroundColor: color,
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: uieTheme.spacing.space1,
    marginRight: uieTheme.spacing.space2,
    marginBottom: uieTheme.spacing.space2,
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: uieTheme.colors.borderPanel,
  }
  return (
    <FelaComponent style={style}>
      <Box
        style={{
          ...uieTheme.fontStyles.base,
          color: textColor,
          fontSize: uieTheme.fontSizes.small,
          marginBottom: 'auto',
        }}
      >
        {name}
      </Box>
      <Box
        style={{
          ...uieTheme.fontStyles.base,
          color: textColor,
          fontSize: uieTheme.fontSizes.verySmall,
        }}
      >
        {color}
      </Box>
    </FelaComponent>
  )
}

export default withUIETheme(ColorPanel)
