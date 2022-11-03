
import React from 'react'
import { useButton } from '@hooks'

const Button = (props: IButton) => {
  const { resolveStyles } = useButton()
  const componentClasses = resolveStyles(props)
  const { children, onClick, type = 'button' } = props

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e)
  }

  return (
    <button
      className={componentClasses}
      onClick={(e) => handleClick(e)}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button