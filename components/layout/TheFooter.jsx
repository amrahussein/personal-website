import ConnectSocials from '../micros/ConnectSocials';

export default function Footer() {
  return (
    <footer className="bg-orange-200 mt-20 bottom-0  border-solid border-x-0 border-4 border-b-0  border-red-700">
      {/* horizontal line red */}
      <div className=" flex flex-row  font-bold text-red-900 "></div>

      {/* credits Info */}
      <div className="pl-3 font-bold font-mono text-slate-700">
        <h3 className="pt-10  text-xl ">Credits:</h3>
        <p className="pl-3">
          Data scraped from:{' '}
          <span className="font-mono text-red-900">
            {' '}
            <a href="https://pocketchangegourmet.com">
              pocketchangegourmet.com
            </a>
          </span>
        </p>
        <p className="pl-3">
          Check{' '}
          <a
            className="text-red-900"
            href="https://pocketchangegourmet.com/the-definitive-guide-to-apples-and-their-uses/"
            rel="noopener noreferrer"
            target="_blank"
          >
            their article
          </a>
          , it's awesome!
        </p>

        {/* apple logo credits */}
        <h4 className="pl-3">
          Apple Logo made by Ecology from:{' '}
          <span>
            <a
              className="text-red-900"
              href="https://flaticon.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              flaticon.com
            </a>
          </span>
        </h4>
      </div>

      {/* web design by */}
      <div className=" text-slate-600 text-sm font-semibold font-mono pt-3 pl-3">
        <p className="pr-3 pt-3 ">Designed with love: </p>
        <span className="">
          &copy;
          <a
            className=" font-bold self-center text-slate-700 pl-1"
            href="https://amromoorie.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Amr Abdelkamel
          </a>
        </span>
      </div>

      <ConnectSocials />
    </footer>
  );
}
