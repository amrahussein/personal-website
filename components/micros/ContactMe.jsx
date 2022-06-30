import { useForm, ValidationError } from '@formspree/react'
import AppLink from './typography/AppLink'

export default function ContactMe() {
  const [state, handleSubmit] = useForm('xdobvjqa')

  return (
    <>
      <section className='pt-10'>
        <h3 className='tracking-wider font-mono pl-5 pt-5 text-3xl italic text-gray-500'>
          send me a quick message
        </h3>
      </section>
      {state.succeeded ? (
        <section className='px-4 py-2 border-2 border-primary rounded'>
          Message Submitted. Thanks!
        </section>
      ) : (
        <>
          <div className='decorate-form text-gray-600 font-semibold leading-tight'>
            <form onSubmit={handleSubmit} className='px-8 bg-white'>
              <div className='py-6 space-y-6'>
                <section className='flex flex-col space-y-2'>
                  <label className='' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    className='input pt-2'
                    rows={6}
                    required
                  />
                </section>

                <section className='space-y-2'>
                  <label className=''>Name</label>
                  <input
                    name='name'
                    required
                    type='text'
                    className='input h-10'
                  />
                </section>

                <section className='space-y-2'>
                  <label htmlFor='email' className='w-full '>
                    Email
                  </label>
                  <input
                    name='email'
                    type='email'
                    className='input h-10'
                    required
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </section>

                <section>
                  <button type='submit' className='contact-me-btn'>
                    Submit
                  </button>
                </section>
              </div>
            </form>
          </div>
        </>
      )}
      <section className='space-y-4'>
        <div>
          <span className='text-serious'>prefer a casual chat? </span>
          <AppLink href='https://telegram.me/amromoorie/' rel='telegram'>
            <a className='pl-2'>link to telegram</a>
          </AppLink>
        </div>

        <div>
          <span className='text-serious'>reach me directly at: </span>
          <AppLink href='mailto:amr.abdelkamel96@outlook.com/' rel='email'>
            <a className='pl-2 text-important underline hover:text-cool'>
              amr.abdelkamel96@outlook.com
            </a>
          </AppLink>
        </div>
      </section>
    </>
  )
}
