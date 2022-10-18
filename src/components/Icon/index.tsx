import Arrow from './Arrow'
import styles from './styles.module.scss'

const Icon = (props: IIcon) => {
  const { name, onClick = () => null, color } = props

	const getIcon = () => {
		switch (name) {
			case 'arrowLeft':
			case 'arrowRight':
			case 'arrowDown':
			case 'arrowUp':
				return <Arrow {...props} />
			default:
				return null
		}
	}

  return (
    <div className={styles[`fill-${color}`]} onClick={(e) => onClick(e)}>
      {getIcon()}
    </div>
  )
}

export default Icon