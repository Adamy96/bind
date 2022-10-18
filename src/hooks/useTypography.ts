import React, { useRef } from 'react'
import styles from '@components/Typography/styles.module.scss'

const useTypography = () => {
  const variantMapping = {
    title: 'h1',
    subtitle: 'h2',
    button: 'p',
    body: 'p',
    caption: 'span'
  }

  const createComponent = (params: ITypography) => {
    const componentClasses = resolveStyles(params)
    const { variant, children } = params

    const component = React.createElement(
      variantMapping[variant],
      { className: componentClasses },
      children
    )

    return component
  }

  const resolveStyles = ({ align, variant, weight, textShadow, ellipsis, className }: ITypography) => {
    const resolvedStyles = [
      styles.typography,
      styles[`variant-${variant}`]
    ]

    if (align) resolvedStyles.push(styles[`align-${align}`])
    if (weight) resolvedStyles.push(styles[`weight-${weight}`])
    if (ellipsis) resolvedStyles.push(styles.ellipsis)
    if (textShadow) resolvedStyles.push(styles[`textShadow-${textShadow}`])
    if (className) resolvedStyles.push(className)

    return resolvedStyles.join(' ')
  }

  return { createComponent }
}

export default useTypography