import { useForm, ValidationError } from '@formspree/react'
import AppLink from './typography/AppLink'

export default function ContactMe() {
  const [state, handleSubmit] = useForm('xdobvjqa')

  return (
    <>
      {state.succeeded ? (
        <section className='px-4 py-2 border-2 border-primary rounded'>
          Message Submitted. Thanks!
        </section>
      ) : (
        <>
          <section className='pt-4 ... md:pt-10'>
          <h3 className='pl-5 pt-5 pb-2 font-mono text-xl font-bold italic text-gray-500 ... md:text-3xl md:tracking-wider md:font-normal'>
            send me a quick message
          </h3>
        </section>
          <div className='ml-[-1rem] decorate-form text-gray-600 font-semibold leading-tight ... md:ml-[-2rem]'>
            <form onSubmit={handleSubmit} className='px-4 bg-white ... md:px-8'>
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
                  <label className='' htmlFor='name'>Name</label>
                  <input
                    name='name'
                    required
                    type='text'
                    className='input h-10'
                  />
                </section>

                <section className='space-y-2'>
                  <label className='' htmlFor='email' >
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

      <section className='space-y-4 pt-4 -ml-4 ... md:ml-[-2rem]'>
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