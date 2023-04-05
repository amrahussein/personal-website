import Link from 'next/link';

export default function AppLink({ children, href, rel = {}, styles }) {
  return (
    <span
      className={`text-important underline hover:text-cool hover:underline ${
        styles ? styles : ''
      }`}
    >
      <Link href={href} rel={rel}>
        <a aria-label={rel} target='_blank'>
          {children}
        </a>
      </Link>
    </span>
  );
}
