import Link from 'next/link'

export default function LinkPage({ children, href }) {
  return (
    <Link href={href} as={process.env.BACKEND_URL + href}>
      {children}
    </Link>
  )
}
