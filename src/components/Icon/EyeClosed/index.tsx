import { EyeClosed as EyeClosedSvg } from "@assets/svgs";
import styles from './styles.module.scss'

const EyeClosed = (props: IIcon) => {
  const { color } = props

  return (
    <EyeClosedSvg
      className={`${styles[color]} ${props.className}`}
      onClick={props.onClick}
    />
  )
}

export default EyeClosed