import Copyright from '../micros/Copyright';
import GoSocials from '../micros/GoSocials';

export default function DesktopFooter() {
  return (
    <footer className='fixed inset-x-0 bottom-0 flex items-center justify-between border-4 border-x-0 border-b-0 border-solid border-accent bg-white px-10 pb-6 pt-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'>
      <Copyright />

      <GoSocials
        socialNames={false}
        styleSocialItems='flex space-x-10'
        linkStyle='w-6 h-6 rounded-full hover:scale-125 hover:rotate-[5deg]'
      />
    </footer>
  );
}
