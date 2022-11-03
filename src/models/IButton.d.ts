interface IButton {
  variant?: 'light' | 'default'
  className?: string
  children: ReactNode
  disabled?: boolean
  size: 'sm' | 'md' | 'lg'
  fullWidth?: boolean,
  onClick?: (e?) => any
  type?: 'button' | 'submit' | 'reset'
}