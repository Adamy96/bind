import btnStyles from '@components/Button/styles.module.scss'
import sharedStyles from '@styles/shared/linkBtn.module.scss'

const useButton = () => {
  const resolveStyles = ({
    variant,
    className,
    disabled,
    size,
    fullWidth,
  }: IButton): string => {
    const resolvedStyles = [
      btnStyles.btn,
      sharedStyles[`variant-${variant}`],
      sharedStyles[`size-${size}`]
    ]

    if (disabled) resolvedStyles.push(sharedStyles.disabled)
    if (fullWidth) resolvedStyles.push(sharedStyles.fullWidth)
    if (className) resolvedStyles.push(className)

    return resolvedStyles.join(' ')
  }

  return {
    resolveStyles
  }
}

export default useButton