import { useForm, ValidationError } from '@formspree/react';
import AppLink from './typography/AppLink';

export default function ContactMe() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_CODE);

  return (
    <>
      {state.succeeded ? (
        <section className='rounded border-2 border-primary px-4 py-2'>
          Message Submitted. Thanks!
        </section>
      ) : (
        <>
          <section className='pt-4 md:pt-10'>
            <h3 className='pl-5 pt-5 pb-2 font-mono text-xl font-bold italic text-gray-500 md:text-3xl md:font-normal md:tracking-wider'>
              send me a quick message
            </h3>
          </section>
          <div className='decorate-form ml-[-1rem] font-semibold leading-tight text-gray-600 md:ml-[-2rem]'>
            <form
              onSubmit={handleSubmit}
              className='bg-white px-4 sm:pl-8 sm:pr-16 md:px-8'
            >
              <div className='space-y-6 py-6'>
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
                  <label className='' htmlFor='name'>
                    Name
                  </label>
                  <input
                    name='name'
                    required
                    type='text'
                    className='input h-10'
                  />
                </section>

                <section className='space-y-2'>
                  <label className='' htmlFor='email'>
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

      <section className='-ml-4 space-y-4 pt-4 md:ml-[-2rem]'>
        <div>
          <span className='text-serious'>prefer a casual chat? </span>
          <AppLink href='https://telegram.me/amromoorie/' rel='telegram'>
            <a className='pl-2'>link to telegram</a>
          </AppLink>
        </div>

        <div>
          <span className='text-serious'>reach me directly at: </span>
          <AppLink href='mailto:amr.abdelkamel3@outlook.com/' rel='email'>
            <a className='pl-2 text-important underline hover:text-cool'>
              amr.abdelkamel3@outlook.com
            </a>
          </AppLink>
        </div>
      </section>
    </>
  );
}
