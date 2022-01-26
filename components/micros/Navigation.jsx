import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <nav>
        <h1>amromoorie</h1>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <li>
            <Link href="/About">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/Blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
