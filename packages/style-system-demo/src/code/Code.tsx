import {Box} from '@indoqa/style-system'
import Editor from '@monaco-editor/react'
import * as React from 'react'

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
  const lineCount = (children as string).split('\n').length
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
      {show && (
        <Editor
          height={`${lineCount * 2}ch`}
          language={language || 'xml'}
          value={children as string}
          theme="vs"
          options={{
            domReadOnly: true,
            fontSize: '12px',
            minimap: {
              enabled: false,
            },
            readOnly: true,
            scrollbar: {
              alwaysConsumeMouseWheel: false,
              vertical: 'hidden',
            },
            scrollBeyondLastLine: false,
          }}
        />
      )}
    </Box>
  )
}

export default Code
