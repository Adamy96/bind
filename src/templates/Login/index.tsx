import { Login as LoginForm } from '@components/Forms'
import styles from './styles.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  )
}

export default Login