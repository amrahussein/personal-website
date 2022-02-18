import { default as NextLink } from 'next/link'

export default function Link({ children, href, rel = {}, styles }) {
  return (
    <span className={`hover:underline ${styles ? styles : ''}`}>
      <NextLink href={href} rel={rel}>
        <a>{children}</a>
      </NextLink>
    </span>
  )
}
