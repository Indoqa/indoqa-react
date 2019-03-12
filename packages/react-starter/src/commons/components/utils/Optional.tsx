import * as React from 'react'

interface Props {
  test: any,
}

const Optional: React.FC<Props> = ({test, children}) => {
  if (!test) {
    return null
  }
  return <>{children}</>
}

export default Optional
