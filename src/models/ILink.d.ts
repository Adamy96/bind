interface ILink {
  align?: AlignType
  variant?: 'light' | 'default'
  className?: string
  disabled?: boolean
  size: 'sm' | 'md' | 'lg'
  fullWidth?: boolean,
  href: string,
  shallow?: boolean,
  text: string,
  weight?: WeightType = 'regular'
}