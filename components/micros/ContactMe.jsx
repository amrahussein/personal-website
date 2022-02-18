import Heading from './typography/Heading'
import Link from './typography/Link'

export default function ContactMe() {
  return (
    <>
      <span className='text-serious'>email: </span><Link href='mailto:amromoorie@gmail.com' rel='email'>amromoorie@gmail.com</Link>
<br />
      <span className='text-serious'>telegram: </span><Link href='https://telegram.me/amromoorie' rel='telegram'>reach me on telegram</Link>
    </>
  )
}
