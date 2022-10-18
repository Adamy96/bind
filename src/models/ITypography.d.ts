interface ITypography {
  align?: AlignType = 'left'
  children: ReactNode,
  className?: string
  paragraph?: boolean
  variant: TypographyVariantType
  weight?: WeightType = 'regular'
  textShadow?: 'default'
  ellipsis?: boolean
}

type AlignType = (
  'center' |
  'inherit' |
  'justify' |
  'left' |
  'right'
)

type TypographyVariantType = (
  'title' |
  'subtitle' |
  'button' |
  'body' |
  'caption'
)

type WeightType = (
  'light' |
  'regular' |
  'semiBold' |
  'bold' |
  'xbold' |
  'black' |
  'xblack'
)