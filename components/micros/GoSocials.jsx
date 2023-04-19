import Link from 'next/link';
import { socials } from '../../data/socials/social-meta.data';

export default function GoSocials({
  styleSocialItems,
  linkStyle,
  socialNames = true,
}) {
  return (
    <section
      className={`${
        styleSocialItems ? styleSocialItems : 'mt-10 grid grid-cols-2 gap-7'
      }`}
    >
      {socials.map((item) => (
        <Link key={item.name} href={item.link}>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='2xl pt-1 text-center font-semibold tracking-wider text-important opacity-75'
            aria-label={item.ariaLabel}
          >
            <div
              className={`${
                linkStyle
                  ? linkStyle
                  : 'flex h-24 w-24 flex-col space-y-4 rounded-3xl p-2 hover:scale-110 hover:bg-accent sm:h-32 sm:w-32'
              }`}
            >
              {item.icon}
              {socialNames && (
                <p className='text-sm text-secondary opacity-100 hover:opacity-100'>
                  {item.name}
                </p>
              )}
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
}
