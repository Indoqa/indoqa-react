import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface Props extends WithUIETheme {
  color?: string,
}

const ColorPanel = ({color, uieTheme}: Props) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '5rem',
    height: '5rem',
    backgroundColor: color,
    padding: uieTheme.spacing.space1,
    marginRight: uieTheme.spacing.space1,
    marginBottom: uieTheme.spacing.space1,
    borderRadius: '3px',
    border: uieTheme.layout.colorPanelBorder,
  }
  return (
    <FelaComponent style={style} />
  )
}

export default withUIETheme(ColorPanel)
