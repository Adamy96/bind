import { useState } from 'react'
import { Input } from '@components'
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
    <form>
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