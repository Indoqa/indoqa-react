import {Text} from '@indoqa/style-system'
import * as React from 'react'
import {Theme} from '../app/theme'
import Code from '../code/Code'
import {sample1} from './TextSamplesCode'

const TextSamples: React.FC = () => (
  <>
    <h3>Text</h3>
    <Text pr={1} color="accent">
      Text1
    </Text>
    <Text<Theme> pr={1} fontStyle="mono" italic>
      Text2
    </Text>
    <Text pr={1} style={{fontStyle: 'oblique'}} underline>
      Text3
    </Text>
    <Text pr={1} uppercase underline>
      Text4
    </Text>
    <Code initialShow showToggle={false}>
      {sample1}
    </Code>
  </>
)

export default TextSamples
