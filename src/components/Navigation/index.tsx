
import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useNavigation } from '@hooks'
import { Icon, Typography } from '@components'
import styles from './styles.module.scss'

const Navigation = ({ navigationHeight, setNavigationHeight }: Props) => {
  const router = useRouter()
  const navRef = useRef<HTMLDivElement | null>(null)
  const { getNavHeader, getNavigationPaths } = useNavigation(router)
  const navigationPaths = getNavigationPaths()
  const [navHeader, setNavHeader] = useState({
    title: '',
    subtitle: ''
  })

  useEffect(() => {
    const { title, subtitle } = getNavHeader()
    setNavHeader({ title, subtitle })
  }, [router?.pathname])

  useEffect(() => {
    const clientHeight = navRef?.current?.clientHeight
    if (clientHeight && clientHeight !== navigationHeight) {
      setNavigationHeight(clientHeight)
    }
  }, [navRef, navHeader?.title, navHeader?.subtitle])

  if (!navigationPaths.includes(router.pathname)) return null

  const handleBack = () => {
    router.back()
  }

  return (
    <div className={styles.navigation} ref={navRef}>
      <Icon
        name='arrowLeft'
        color='mainLight'
        onClick={() => handleBack()}
      />
      <div className={styles.content}>
        <Typography variant='button' weight='bold' className={styles.title}>
          {navHeader.title}
        </Typography>
        <Typography variant='body' className={styles.subtitle}>
          {navHeader.subtitle}
        </Typography>
      </div>
    </div>
  )
}

interface Props {
  navigationHeight: number,
  setNavigationHeight: (e: number) => void
}

export default Navigation