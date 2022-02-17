import appleInfo from '../../appleInfo.json';

export default function Header() {
  return (
    <header>
      <h1 className=" pl-2 mt-7 text-5xl leading-[3.3rem] font-bold text-slate-700">
        {appleInfo.mainTitle}
      </h1>
      <h1 className="  pl-3 pt-2 text-3xl font-bold text-gray-400 lg:pl-7 ... 2xl:pt-4">
        Get to know your <em className="text-red-600  ">apple varieties</em>
      </h1>
    </header>
  );
}
