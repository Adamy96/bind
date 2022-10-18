import Image from 'next/image'
import { Link, Typography } from '@components'
import { LogoPurple } from '@assets/svgs'
import { evelynn_24 } from '@assets/jpgs'
import styles from './styles.module.scss'

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Image
        className={styles.bgImage}
        src={evelynn_24}
        alt={'Placeholder alt'}
        layout='fill'
        objectFit='cover'
        objectPosition={'center'}
        quality={100}
      />

      <div className={styles.content}>
        <div>
          <LogoPurple />
          <Typography
            variant='title'
            align='center'
            weight='semiBold'
            className={`${styles.text} ${styles.middleText}`}
          >
            Boas vindas!
          </Typography>
          <Typography
            variant='title'
            align='center'
            weight='semiBold'
            className={styles.text}
          >
            Algum cta ou texto
          </Typography>
        </div>

        <div className={styles.btnsContainer}>
          <Link
            align={'center'}
            variant='light'
            size='md'
            fullWidth
            href='/login'
            text='Entrar'
          />

          <Link
            align={'center'}
            variant='default'
            size='md'
            fullWidth
            href='/register'
            text='Criar conta'
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
