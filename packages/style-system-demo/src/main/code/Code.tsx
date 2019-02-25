import {Box} from '@indoqa/style-system'
import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

interface Props {
  initialShow?: boolean,
}

const Code: React.FC<Props> = ({initialShow, children}) => {
  const [show, setShow] = React.useState(initialShow)
  return (
    <Box mt={1}>
      <Box mb={1}>
        <a href="#" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} code</a>
      </Box>
      {show && <SyntaxHighlighter
        showLineNumbers
        language="xml"
        customStyle={{fontSize: '75%'}}>
        {children}
      </SyntaxHighlighter>}
    </Box>
  )
}

export default Code
