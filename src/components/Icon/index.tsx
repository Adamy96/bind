import Arrow from './Arrow'
import EyeClosed from './EyeClosed'
import EyeOpen from './EyeOpen'
import Facebook from './Facebook'
import Google from './Google'
import styles from './styles.module.scss'

const Icon = (props: IIcon) => {
  const { name } = props

	const getIcon = () => {
		switch (name) {
			case 'arrowLeft':
			case 'arrowRight':
			case 'arrowDown':
			case 'arrowUp':
				return <Arrow {...props} />
			case 'eyeClosed':
				return <EyeClosed {...props} />
			case 'eyeOpen':
				return <EyeOpen {...props} />
			case 'facebook':
				return <Facebook {...props} />
			case 'google':
				return <Google {...props} />
			default:
				return null
		}
	}

  return getIcon()
}

export default Icon