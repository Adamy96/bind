import { ArrowLeft } from "@assets/svgs"
import { useStyles } from '@hooks'
import styles from './styles.module.scss'

const Arrow = (props: IIcon) => {
  const { getColor } = useStyles()
  const { name, color } = props

  return (
    <ArrowLeft
      className={styles[name]}
      style={{
        stroke: `var(${getColor(color)})`,
        strokeWidth: "2"
      }}
    />
  )
}

export default Arrow