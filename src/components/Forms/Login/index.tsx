import { useState } from 'react'
import Link from 'next/link'
import { Button, Typography, Icon, Input } from '@components'
import styles from './styles.module.scss'

const Login = ({ onSubmit }: Props) => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = {...form}
    updatedForm[e.target.name as keyof ILoginForm] = e.target.value;
    setForm(updatedForm);
  }

  return (
    <form className={styles.form}>
      <Input
        label='Email'
        name='email'
        type='email'
        value={form.email}
        onChange={handleFormChange}
        className={styles.input}
      />
      <Input
        label='Senha'
        name='password'
        type='password'
        value={form.password}
        onChange={handleFormChange}
        className={styles.input}
      />
      <Link href='/password'>
        <a className={styles.forgotPassword}>
          Esqueci minha senha
        </a>
      </Link>
      <Button
        variant='default'
        size='md'
        fullWidth
        disabled={form.email === '' || form.password === ''}
        onClick={(e) => e.preventDefault()}
        className={styles.submitBtn}
      >
        <Typography variant='button' weight='bold'>
          Entrar
        </Typography>
      </Button>

      <Typography variant='body' align='center'>
        Ou faça login por:
      </Typography>

      <div className={styles.socialContainer}>
        <Button
          variant='light'
          size='sm'
          onClick={() => null}
          fullWidth
          className={styles.socialBtn}
        >
          <Icon name='facebook' color='mainDark' />
          <Typography variant='button' align='center' weight='bold'>
            Facebook
          </Typography>
        </Button>
        <Button
          variant='light'
          size='sm'
          onClick={() => null}
          fullWidth
          className={styles.socialBtn}
        >
          <Icon name='google' color='mainDark' />
          <Typography variant='button' align='center' weight='bold'>
            Google
          </Typography>
        </Button>
      </div>
    </form>
  )
}

interface Props {
  onSubmit?: (e: any) => any
}

interface ILoginForm {
  email: string
  password: string
}


export default Login