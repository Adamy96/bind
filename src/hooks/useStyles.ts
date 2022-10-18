const useStyles = () => {
  const getColor = (color: IColors) => {
    switch (color) {
      case 'mainDarkest':
        return '--color-main-darkest'
      case 'mainDark':
        return '--color-main-dark'
      case 'mainMediumDark':
        return '--color-main-medium-dark'
      case 'mainMedium':
        return '--color-main-medium'
      case 'mainMediumLight':
        return '--color-main-medium-light'
      case 'mainLight':
        return '--color-main-light'
      case 'mainLightest':
        return '--color-main-lightest'
      case 'grayDarkest':
        return '--color-gray-darkest'
      case 'grayDark':
        return '--color-gray-dark'
      case 'grayMediumDark':
        return '--color-gray-medium-dark'
      case 'grayMediumLight':
        return '--color-gray-medium-light'
      case 'grayLight':
        return '--color-gray-light'
      case 'grayLightest':
        return '--color-gray-lightest'
      case 'background':
        return '--color-background'
      case 'statusError':
        return '--color-status-error'
      case 'statusAttencion':
        return '--color-status-attencion'
      case 'statusSuccess':
        return '--color-status-success'
      case 'teamsBlue':
        return '--color-teams-blue'
      case 'teamsRed':
        return '--color-teams-red'
      default:
        return '--color-main-darkest'
    }
  }

  return { getColor }
}

export default useStyles