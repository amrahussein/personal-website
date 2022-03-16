import Link from 'next/link'

export default function AppLink({ children, href, rel = {}, styles }) {
  return (
    <span className={`hover:underline text-important underline hover:text-cool ${styles ? styles : ''}`}>
      <Link href={href} rel={rel}>
        <a aria-label={rel} target='_blank'>{children}</a>
      </Link>
    </span>
  )
}
