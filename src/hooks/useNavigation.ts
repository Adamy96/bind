const useNavigation = (router: any) => {
  const getNavHeader = () => {
    const { pathname } = router

    switch (pathname) {
      case '/login':
        return {
          title: 'Bom te ver de novo!',
          subtitle: 'Olá novamente! Sentimos a sua falta'
        }
      case '/register':
        return {
          title: 'Criar conta',
          subtitle: 'Preencha com seus dados abaixo e bora!'
        }
      case '/terms':
        return {
          title: 'Termos e condições',
          subtitle: 'Confira abaixo os termos e condições'
        }
      default:
        return {
          title: '',
          subtitle: ''
        }
    }
  }

  const getNavigationPaths = () => {
    return ['/login', '/register', '/terms']
  }

  return { getNavHeader, getNavigationPaths }
}

export default useNavigation