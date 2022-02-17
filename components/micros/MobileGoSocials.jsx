import Link from "next/link";
import { socials } from "./Social.links";


export default function MobileGoSocials({styles, linkStyle, socialNames=true}) {
  return (
      <section className='my-10 flex flex-col space-y-4' >
        {socials.map((item) => (
          
          <Link key={item.name}  href={item.link} >
            <a rel="noopener noreferrer" target="_blank" className='2xl pb-3 pt-1 text-center font-semibold opacity-75 tracking-widest text-important' >
            <div  className="flex flex-col justify-center items-center w-36 h-36 space-y-3 rounded-3xl bg-accent hover:border-2 hover:border-secondary">

              {item.icon}
              {socialNames && <p className=''>{item.name}</p>}
          </div>
            </a>

          </Link>
        ))}
      </section>
  );
}
