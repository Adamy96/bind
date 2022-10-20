import React, { useState } from 'react'
import { Navigation } from '@components'
import styles from './styles.module.scss'

const NavigationLayout = ({ router, children }: Props) => {
  const [navigationHeight, setNavigationHeight] = useState(0)  

  return (
    <div>
      <Navigation
        router={router}
        navigationHeight={navigationHeight}
        setNavigationHeight={setNavigationHeight}
      />
      <div
        style={{paddingTop: navigationHeight}}
        className={styles.childrenContainer}
      >
        {children}
      </div>
    </div>
  )
}

interface Props {
  router: any
  children: React.ReactNode
}

export default NavigationLayout