import Link from 'next/link';
import Socials from '../micros/Socials';
export default function LandingNavBrand() {
  return (
    <>
      <header className=''>
          <div>

          <h1 className='text-3xl font-extrabold'>
            <Link href="/">
              <a>
                <strong className=" text-gray-600">
                  amromoorie
                </strong>
                <span className=" text-primary ">
                  .com
                </span>
              </a>
            </Link>
          </h1>
          </div>
        {/* <Socials styles='flex flex-row space-x-12   ' linkStyle={''}/> */}
      
      </header>
    </>
  );
}

// my-3 flex flex-row justify-around  items-center