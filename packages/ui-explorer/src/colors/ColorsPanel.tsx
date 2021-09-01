import {Flex} from '@indoqa/style-system'
import * as React from 'react'
import {Color} from '../types'
import {ColorPanel} from './ColorPanel'
import {SmallColorPanel} from './SmallColorPanel'

interface Props {
  colors: Color[]
  small?: boolean
}

const renderColor = (color: Color, small: boolean | undefined) => {
  if (small) {
    return <SmallColorPanel key={color.name} color={color.hexCode} />
  }
  return <ColorPanel key={color.name} name={color.name} color={color.hexCode} />
}

export const ColorsPanel: React.FunctionComponent<Props> = ({colors, small}) => (
  <Flex>{colors.map((color) => renderColor(color, small))}</Flex>
)

ColorsPanel.defaultProps = {
  small: false,
}
