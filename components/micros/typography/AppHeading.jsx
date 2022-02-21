export default function AppHeading({ children, size }) {
  return (
   
    <h2 className={`pt-5 text-4xl text-primary opacity-70 hover:opacity-100 ${size ? size : 'text-3xl'}`}>
      <span className='text-important hover:opacity-100'># </span>
      {children}
    </h2>
  )
}
