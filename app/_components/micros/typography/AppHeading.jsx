export default function AppHeading({ children, styles }) {
  return (
    <h2
      className={`ml-[-0.5rem] pt-5 text-4xl text-primary dark:text-slate-500 sm:ml-[-1rem] ${
        styles ? styles : 'text-3xl'
      }`}
    >
      <span className='text-important hover:opacity-100'># </span>
      {children}
    </h2>
  );
}
