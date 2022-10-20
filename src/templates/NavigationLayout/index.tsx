import React, { useState } from 'react'
import { Navigation } from '@components'

const NavigationLayout = ({ router, children }: Props) => {
  const [navigationHeight, setNavigationHeight] = useState(0)  

  return (
    <div>
      <Navigation
        router={router}
        navigationHeight={navigationHeight}
        setNavigationHeight={setNavigationHeight}
      />
      <div style={{height: '100vh', paddingTop: navigationHeight}}>
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