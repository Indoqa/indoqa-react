import {Box} from '@indoqa/style-system'
import * as React from 'react'
//import SyntaxHighlighter from 'react-syntax-highlighter'

interface Props {
  initialShow?: boolean
  showToggle?: boolean
  showLineNumbers?: boolean
  language?: string
}

const Code: React.FC<React.PropsWithChildren<Props>> = ({
  initialShow,
  showToggle = true,
  showLineNumbers = true,
  language,
  children,
}) => {
  const [show, setShow] = React.useState(initialShow)
  return (
    <Box mt={1}>
      {showToggle && (
        <Box mb={1}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'} code
          </a>
        </Box>
      )}
      {show && children}
      {/*show && (
        <SyntaxHighlighter
          showLineNumbers={showLineNumbers}
          language={language || 'xml'}
          customStyle={{fontSize: '75%', backgroundColor: '#F1F3F5'}}
        >
          {children}
        </SyntaxHighlighter>
      )*/}
    </Box>
  )
}

export default Code
