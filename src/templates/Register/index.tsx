import Link from 'next/link'
import { Register as RegisterForm } from '@components/Forms'
import { Typography } from '@components'
import styles from './styles.module.scss'

const Register = () => {
  return (
    <div className={styles.register}>
      <RegisterForm />
      <div className={styles.bottomContainer}>
        <Typography variant='body' align='center'>
          Já possui uma conta?
        </Typography>
        <Link href='/login' replace>
          <a className={styles.link}>
            Faça o login!
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Register