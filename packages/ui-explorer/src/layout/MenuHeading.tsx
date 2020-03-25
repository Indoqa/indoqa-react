import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const MenuHeading: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const baseStyle: IStyle = {
    textTransform: 'uppercase',
    margin: 0,
    paddingBottom: '0.4rem',
    marginBottom: uieTheme.spacing.space0,
    color: uieTheme.colors.textMenuHeading,
    fontSize: uieTheme.fontSizes.small,
  }

  return (
    <FelaComponent style={[baseStyle, uieTheme.fontStyles.headline]} as="h3">
      {children}
    </FelaComponent>
  )
}

export default withUIETheme(MenuHeading)
