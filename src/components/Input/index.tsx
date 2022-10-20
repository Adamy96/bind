import React, { useState } from 'react'
import { Typography, Icon } from '@components'
import styles from './styles.module.scss'

const Input = ({
  autoComplete = 'off',
  label,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  className = ''
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`${styles.container} ${className}`}>
      {label && (
        <Typography variant='caption' weight='semiBold' className={styles.label}>
          {label}
        </Typography>
      )}
      <div className={styles.inputContainer}>
        {type === 'password' && (
          <Icon
            name={showPassword ? 'eyeClosed' : 'eyeOpen'}
            color='mainLight'
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeIcon}
          />
        )}
        <input
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder || ''}
          value={value}
          onChange={(e) => onChange(e)}
          autoComplete={autoComplete}
          className={styles.input}
        />
      </div>
    </div>
  )
}

interface Props {
  autoComplete?: 'on' | 'off'
  label?: string
  type?: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export default Input