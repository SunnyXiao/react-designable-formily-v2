import React from 'react'
import { useTheme } from '@designable/react'

const logo = {
  dark: '../images/CWG-Logo.png',
  light: '../images/CWG-Logo.png',
}

export const LogoWidget: React.FC = () => {
  const url = logo[useTheme()]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
      {/* <img
        src={url}
        style={{ margin: '12px 8px', height: 18, width: 'auto' }}
      /> */}
      <div className="logo-bg"></div>
    </div>
  )
}
