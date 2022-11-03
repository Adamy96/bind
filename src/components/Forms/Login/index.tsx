import { useState } from 'react'
import Link from 'next/link'
import { Button, Typography, Icon, Input } from '@components'
import { useForm } from '@hooks'
import styles from './styles.module.scss'

import * as yup from 'yup'

const Login = ({ onSubmit }: Props) => {
  const { parseErrors } = useForm()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedForm = {...form}
    updatedForm[e.target.name as keyof ILoginForm] = e.target.value;
    setForm(updatedForm);
  }

  const validate = async () => {
    const schema = yup.object().shape({
      email: yup.string()
        .required('Preencha com o seu email req')
        .email('Insira um email válido email'),
      password: yup.string()
        .required('A senha deve conter pelo menos 8 caracteres req')
        .min(8, 'A senha deve conter pelo menos 8 caracteres min')
    })

    try {
      await schema.validate(form, { abortEarly: false })
      return true
    } catch (err: any) {
      const parsedErrors = parseErrors(form, err)
      console.log(parsedErrors)

      return false;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit')
    await validate()
    console.log('afterSubmit')
    e.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)} noValidate>
      <Input
        label='Email'
        name='email'
        type='email'
        value={form.email}
        onChange={handleFormChange}
        className={styles.input}
        error='Error message'
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
        // disabled={form.email === '' || form.password === ''}
        // onClick={(e) => e.preventDefault()}
        className={styles.submitBtn}
        type='submit'
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