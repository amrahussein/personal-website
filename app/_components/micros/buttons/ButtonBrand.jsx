import useIsMobile from '../../../../context/IsMobile.context';

export default function ButtonBrand({ children }) {
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile ? (
        <h2 className='pt-2 pl-4 font-mono text-2xl italic text-important underline opacity-70 hover:text-cool'>
          {children}
        </h2>
      ) : (
        <h2 className='text-secodary float-right mt-2 ml-6 rounded-full border-2 border-x-0 border-t-0 border-b-primary bg-accent px-4 py-1 italic tracking-widest transition duration-150 hover:border-b-cool hover:text-cool dark:bg-primary dark:text-slate-100 dark:hover:border-b-important dark:hover:text-slate-900'>
          {children}
        </h2>
      )}
    </>
  );
}
