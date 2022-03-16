import AppLink from './typography/AppLink'

export default function ContactMe() {
  return (
    <div className='space-y-4'>
      <div>
        <span className='text-serious'>email: </span>
        <AppLink href='mailto:amromoorie@gmail.com/' rel='email'>
          <a className='pl-2 text-important underline hover:text-cool'>
            amromoorie@gmail.com
          </a>
        </AppLink>
      </div>

      <div>
        <span className='text-serious'>telegram: </span>
        <AppLink href='https://telegram.me/amromoorie/' rel='telegram'>
          <a className='pl-2'>reach me on telegram</a>
        </AppLink>
      </div>
    </div>
  )
}
