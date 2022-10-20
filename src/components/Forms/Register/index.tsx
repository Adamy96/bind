import { useState } from 'react'
import Link from 'next/link'
import { Button, Typography, Icon, Input } from '@components'
import styles from './styles.module.scss'

const Register = () => {
  const [form, setForm] = useState({
    phone: '',
    email: '',
    password: '',
    birthdate: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = {...form}
    updatedForm[e.target.name as keyof IRegisterForm] = e.target.value;
    setForm(updatedForm);
  }

  const checkSubmitEnabled = () => {
    return (
      form.phone &&
      form.email &&
      form.password &&
      form.birthdate
    )
  }

  return (
    <form className={styles.form}>
      <Input
        label='Telefone'
        name='phone'
        type='text'
        value={form.phone}
        onChange={handleFormChange}
        className={styles.input}
      />
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
      <Input
        label='Data de nascimento'
        name='birthdate'
        type='text'
        value={form.birthdate}
        onChange={handleFormChange}
        className={styles.input}
      />

      <Typography variant='caption'>
        Criando a conta, você estará declarando que leu e está ciente dos{' '}
        <Link href='/terms'>
          <a className={styles.linkTerms}>
            termos de serviço e privacidade
          </a>
        </Link>
      </Typography>

      <Button
        variant='default'
        size='md'
        fullWidth
        disabled={!checkSubmitEnabled()}
        onClick={(e) => e.preventDefault()}
        className={styles.submitBtn}
      >
        <Typography variant='button' weight='bold'>
          Entrar
        </Typography>
      </Button>
    </form>
  )
}

interface IRegisterForm {
  phone: string
  email: string
  password: string
  birthdate: string
}

export default Register