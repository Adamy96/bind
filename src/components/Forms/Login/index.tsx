import { useState } from 'react'
import Link from 'next/link'
import { Formik, Form } from 'formik'
import { Button, Typography, Icon, Input } from '@components'
import styles from './styles.module.scss'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

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
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className={styles.form}>
          <Input
            label='Email'
            name='email'
            type='email'
            value={form.email}
            // onChange={handleFormChange}
            className={styles.input}
          />
          <Input
            label='Senha'
            name='password'
            type='password'
            value={form.password}
            // onChange={handleFormChange}
            className={styles.input}
          />
          <Link href='/password'>
            <a className={styles.forgotPassword}>
              Esqueci minha senha
            </a>
          </Link>
          <button type='submit' onClick={() => console.log(values)}>Entrar</button>
          <Button
            variant='default'
            size='md'
            fullWidth
            disabled={values.email === '' || values.password === ''}
            onClick={(e) => null}
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
        </Form>
        )}
    </Formik>
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