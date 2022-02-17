import Link from 'next/link'

export default function ContactMe() {
  return (
    <>
      <article className='hover:underline'>
        <Link href='mailto:amr.abdelkamel96@outlook.com'>
          <a>amr.abdelkamel96@outlook.com</a>
        </Link>
      </article>

      <article className='hover:underline'>
        <Link href='https://telegram.me/amromoorie'>
          <a>reach me on telegram</a>
        </Link>
      </article>
    </>
  )
}
