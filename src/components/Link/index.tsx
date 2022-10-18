import { default as NextLink } from 'next/link'
import { useLink } from '@hooks'

const Link = (props: ILink) => {
  const { resolveStyles } = useLink()
  const resolvedStyles = resolveStyles(props)
  const { text, href, shallow } = props

  return (
    <NextLink href={href} shallow={!!shallow}>
      <a className={resolvedStyles}>
        {text}
      </a>
    </NextLink>
  )
}

export default Link