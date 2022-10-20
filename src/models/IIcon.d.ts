interface IIcon {
  name: (
    'arrowLeft' |
    'arrowRight' |
    'arrowUp' |
    'arrowDown' |
    'eyeOpen' |
    'eyeClosed' |
    'facebook' |
    'google'
  )
  color: IColors
  onClick?: (e: any) => any
  className?: string = ''
}