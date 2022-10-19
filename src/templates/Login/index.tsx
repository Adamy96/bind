import Link from 'next/link'
import { Login as LoginForm } from '@components/Forms'
import { Typography } from '@components'
import styles from './styles.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
      <div className={styles.createAccount}>
        <Typography variant='body' align='center'>
          Não tem uma conta?
        </Typography>
        <Link href='/register'>
          <a className={styles.link}>
            Criar conta agora
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Login