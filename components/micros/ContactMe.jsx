import { useForm, ValidationError } from '@formspree/react';
import { useId } from 'react';
import AppLink from './typography/AppLink';

export default function ContactMe() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_CODE);

  const emailErrorId = useId();

  return (
    <>
      {state.succeeded ? (
        <section className='rounded border-2 border-primary px-4 py-2'>
          Message Submitted. Thanks!
        </section>
      ) : (
        <>
          <section className='pt-4 md:pt-10'>
            <h3 className='pl-5 pt-5 font-mono text-xl font-bold italic text-gray-500 dark:text-slate-300 md:text-3xl md:font-normal md:tracking-wider'>
              Ask me a question..
            </h3>
          </section>
          <div className='decorate-form ml-[-1rem] font-semibold leading-tight text-slate-600 dark:text-slate-400 md:ml-[-2rem]'>
            <form
              onSubmit={handleSubmit}
              className='bg-white px-4 dark:bg-slate-900 sm:pl-8 sm:pr-16 md:px-8'
              aria-label='Contact form'
            >
              <div className='space-y-6 py-6'>
                <section className='flex flex-col space-y-2'>
                  <label className='' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    className='input pt-2 dark:bg-slate-700'
                    rows={6}
                    required
                    aria-required='true'
                  />
                </section>

                <section className='space-y-2'>
                  <label className='' htmlFor='name'>
                    Name
                  </label>
                  <input
                    name='name'
                    id='name'
                    required
                    type='text'
                    className='input h-10 dark:bg-slate-700'
                    aria-required='true'
                  />
                </section>

                <section className='space-y-2'>
                  <label className='' htmlFor='email'>
                    Email
                  </label>
                  <input
                    name='email'
                    id='email'
                    type='email'
                    className='input h-10 dark:bg-slate-700'
                    required
                    aria-required='true'
                    aria-describedby={emailErrorId}
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                    role='alert'
                    id={emailErrorId}
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
          <span className='text-serious dark:text-slate-300'>
            prefer a casual chat?{' '}
          </span>
          <AppLink
            href='https://telegram.me/amromoorie/'
            rel='telegram'
            styles={'pl-1'}
          >
            link to telegram
          </AppLink>
        </div>

        <div>
          <span className='text-serious dark:text-slate-300'>
            reach me directly at:{' '}
          </span>
          <AppLink
            href='mailto:amr.abdelkamel3@outlook.com'
            rel='email'
            styles={'pl-2'}
          >
            amr.abdelkamel3@outlook.com
          </AppLink>
        </div>
      </section>
    </>
  );
}
