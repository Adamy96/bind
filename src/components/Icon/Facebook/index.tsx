import { Facebook as FacebookSvg } from "@assets/svgs";
import styles from './styles.module.scss'

const Facebook = (props: IIcon) => {
  const { color } = props

  return <FacebookSvg className={`${styles[color]} ${props.className}`} />
}

export default Facebook