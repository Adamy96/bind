import React, { useState } from 'react'
import { Navigation } from '@components'

const NavigationLayout = ({ children }: Props) => {
  const [navigationHeight, setNavigationHeight] = useState(0)  

  return (
    <div>
      <Navigation
        navigationHeight={navigationHeight}
        setNavigationHeight={setNavigationHeight}
      />
      <div style={{height: '100%', paddingTop: navigationHeight}}>
        {children}
      </div>
    </div>
  )
}

interface Props {
  children: React.ReactNode
}

export default NavigationLayout