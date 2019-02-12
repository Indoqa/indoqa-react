import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {UIETheme} from '../sgtheme/UIETheme'
import {withUIETheme, WithUIETheme} from '../sgtheme/withUIETheme'

type HeadingType = 'h1' | 'h2' | 'h3'

interface Props extends WithUIETheme {
  as: HeadingType
}

const getConcreteStyle = (level: HeadingType, sgTheme: UIETheme) => {
  switch (level) {
    case 'h1': {
      return {
        fontSize: sgTheme.fontSizes.veryBig,
        backgroundColor: sgTheme.colors.primaryDark,
        color: sgTheme.colors.textInverted,
        lineHeight: 1,
        paddingLeft: sgTheme.spacing.space2,
        paddingRight: sgTheme.spacing.space2,
        paddingBottom: sgTheme.spacing.space2,
        paddingTop: sgTheme.spacing.space2,
      }
    }
    case 'h2': {
      return {
        fontSize: sgTheme.fontSizes.big,
        paddingBottom: sgTheme.spacing.space2,
      }
    }
    default: {
      return {
        fontSize: sgTheme.fontSizes.small,
      }
    }
  }
}

const Heading: React.FC<Props> = ({children, uieTheme, as}) => {
  const baseStyle: IStyle = {
    textTransform: 'uppercase',
    margin: 0,
    paddingBottom: uieTheme.spacing.space1,
    marginBottom: uieTheme.spacing.space0,
    color: uieTheme.colors.primaryDark,
  }

  return (
    <FelaComponent style={[baseStyle, uieTheme.fontStyles.headline, getConcreteStyle(as, uieTheme)]} as={as}>
      {children}
    </FelaComponent>
  )
}

export default withUIETheme(Heading)
