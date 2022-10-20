import { EyeOpen as EyeOpenSvg } from "@assets/svgs";
import styles from './styles.module.scss'

const EyeOpen = (props: IIcon) => {
  const { color } = props

  return (
    <EyeOpenSvg
      className={`${styles[color]} ${props.className}`}
      onClick={props.onClick}
    />
  )
}

export default EyeOpen