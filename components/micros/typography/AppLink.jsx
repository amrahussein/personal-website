import Link from 'next/link'

export default function AppLink({ children, href, rel = {}, styles }) {
  return (
    <span className={`hover:underline ${styles ? styles : ''}`}>
      <Link href={href} rel={rel}>
        <a>{children}</a>
      </Link>
    </span>
  )
}
