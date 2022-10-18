interface IIcon {
  name: (
    'arrowLeft' |
    'arrowRight' |
    'arrowUp' |
    'arrowDown'
  )
  color: IColors
  onClick?: (e: any) => any
}