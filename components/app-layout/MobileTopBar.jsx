import MobileNavBrand from '../navigation/MobileNavBrand';

export default function MobileTopBar({ paneOpened }) {
  let topNavDark = paneOpened
    ? ' bg-secondary dark:bg-primaryDark text-accent'
    : 'z-10 bg-white border-[0.13rem] dark:bg-slate-900 dark:border-l-primaryDark dark:border-r-primaryDark dark:border-t-primaryDark dark:border-b-slate-500 text-gray-600';
  return (
    <header className={`fixed inset-x-0 top-0 pt-3 pb-2 pl-2 ${topNavDark}`}>
      <MobileNavBrand paneOpened={paneOpened} />
    </header>
  );
}
