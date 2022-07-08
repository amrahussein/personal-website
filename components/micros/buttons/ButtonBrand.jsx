import { useContext } from 'react'
import { AppContext } from '../../App.context'

export default function ButtonBrand({ children }) {
  const isMobile = useContext(AppContext)

  return (
    <>
      {isMobile ? (
        <h2 className='font-mono italic pt-2 pl-4 text-2xl text-important opacity-70 underline hover:text-cool'>
          {children}
        </h2>
      ) : (
        <h2 className='mt-2 px-4 py-1 ml-6 tracking-widest float-right bg-accent rounded-full transition duration-200 italic text-secodary hover:text-cool border-2 border-b-primary hover:border-b-cool border-x-0 border-t-0 '>
          {children}
        </h2>
      )}
    </>
  )
}
