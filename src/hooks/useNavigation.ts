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
      default:
        return {
          title: '',
          subtitle: ''
        }
    }
  }

  const getNavigationPaths = () => {
    return ['/login', '/register']
  }

  return { getNavHeader, getNavigationPaths }
}

export default useNavigation