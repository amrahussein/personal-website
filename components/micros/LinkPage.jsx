import Link from 'next/link'

export default function LinkPage({ children, href }) {
  return (
    <Link href={href} as={process.env.NEXT_PUBLIC_BASE_PATH + href}>
      {children}
    </Link>
  )
}
