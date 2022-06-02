import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const ContentHeading: React.FC<React.PropsWithChildren<WithUIETheme>> = ({children, uieTheme}) => {
  const style: IStyle = {
    fontSize: uieTheme.fontSizes.veryBig,
    backgroundColor: uieTheme.colors.bgContentHeading,
    color: uieTheme.colors.textMainHeading,
    lineHeight: 1,
    paddingLeft: uieTheme.colors.bgContentHeading === 'transparent' ? 0 : uieTheme.spacing.space2,
    paddingRight: uieTheme.spacing.space2,
    paddingBottom: uieTheme.spacing.space2,
    paddingTop: uieTheme.spacing.space2,
    textTransform: 'uppercase',
    margin: 0,
    marginBottom: uieTheme.spacing.space0,
  }

  return (
    <FelaComponent style={[style, uieTheme.fontStyles.headline]} as="h2">
      {children}
    </FelaComponent>
  )
}

export default withUIETheme(ContentHeading)
