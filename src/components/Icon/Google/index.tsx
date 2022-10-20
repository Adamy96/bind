import { Google as GoogleSvg } from "@assets/svgs";
import styles from './styles.module.scss'

const Google = (props: IIcon) => {
  const { color } = props

  return <GoogleSvg className={`${styles[color]} ${props.className}`} />
}

export default Google