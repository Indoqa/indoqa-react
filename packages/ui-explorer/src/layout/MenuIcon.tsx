import * as React from 'react'

interface Props {
  color: string
  size: string
}

const MenuIcon: React.FC<Props> = ({color, size}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 459 459" aria-labelledby="menu">
      <g>
        <g id="menu">
          <path fill={color} d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z" />
        </g>
      </g>
    </svg>
  )
}

export default MenuIcon
