import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const MainHeading: React.FC<React.PropsWithChildren<WithUIETheme>> = ({children, uieTheme}) => {
  const baseStyle: IStyle = {
    fontSize: uieTheme.fontSizes.veryBig,
    backgroundColor: uieTheme.colors.bgMainHeading,
    color: uieTheme.colors.textMainHeading,
    lineHeight: 1,
    paddingLeft: uieTheme.spacing.space2,
    paddingRight: uieTheme.spacing.space2,
    paddingBottom: uieTheme.spacing.space2,
    paddingTop: uieTheme.spacing.space2,
    textTransform: 'uppercase',
    margin: 0,
    marginBottom: uieTheme.spacing.space0,
  }

  return (
    <FelaComponent style={[baseStyle, uieTheme.fontStyles.headline]} as="h1">
      {children}
    </FelaComponent>
  )
}

export default withUIETheme(MainHeading)
