import linkStyles from '@components/Link/styles.module.scss'
import typographyStyles from '@components/Typography/styles.module.scss'
import sharedStyles from '@styles/shared/linkBtn.module.scss'

const useLink = () => {
  const resolveStyles = ({
    align,
    variant,
    className,
    disabled,
    size,
    fullWidth,
    weight = 'bold'
  }: ILink): string => {
    const resolvedStyles = [
      linkStyles.link,
      typographyStyles['typography'],
      typographyStyles['variant-button'],
      sharedStyles[`variant-${variant}`],
      sharedStyles[`size-${size}`]
    ]

    if (align) resolvedStyles.push(linkStyles[`align-${align}`])
    if (weight) resolvedStyles.push(typographyStyles[`weight-${weight}`])
    if (disabled) resolvedStyles.push(sharedStyles.disabled)
    if (fullWidth) resolvedStyles.push(sharedStyles.fullWidth)
    if (className) resolvedStyles.push(className)

    return resolvedStyles.join(' ')
  }

  return {
    resolveStyles
  }
}

export default useLink