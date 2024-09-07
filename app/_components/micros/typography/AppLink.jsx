import Link from 'next/link';

export default function AppLink({ children, href, rel = {}, styles }) {
  return (
    <span
      className={`text-important underline hover:text-cool hover:underline ${
        styles ? styles : ''
      }`}
    >
      <Link aria-label={rel} target='_blank' href={href} rel={rel}>
        {children}
      </Link>
    </span>
  );
}
