import Heading from './typography/Heading'
import Link from './typography/Link'

export default function ContactMe() {
  return (
    <>
      <span className='text-serious'>email: </span>
      <Link href='mailto:amromoorie@gmail.com' rel='email'>
        <a className='pl-2 text-important underline hover:text-cool'>
          amromoorie@gmail.com
        </a>
      </Link>
      <br />
      <span className='text-serious'>telegram: </span>
      <Link href='https://telegram.me/amromoorie' rel='telegram'>
        <a className='pl-2 text-important underline hover:text-cool'>
          reach me on telegram
        </a>
      </Link>
    </>
  )
}
