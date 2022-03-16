export default function Amrologo({ w = 200, h = 200 }) {
  return (
    <figure>
      <div className='border-2 border-accent inline-block rounded-full'>
        <img
          className='rounded-full'
          src={'/img/amrologo.jpg'}
          alt='Picture of the author'
          width={w}
          height={h}
        />
        <figcaption className='hidden'>
          <h1>Amr Abdelkamel</h1>
        </figcaption>
        <div className='py-4 text-gray-500 flex flex-col justify-center items-center ... lg:py-6'>
          <h1 className='pb-2 ... sm:text-base md:text-sm'>
            <span className='text-primary font-extrabold'>@</span>{' '}
            <strong className='text-secondary opacity-70'>amromoorie</strong>
          </h1>
          <p className='mb-[0.3rem] text-sm text-secondary ... md:text-xs'>
            <em>Hello World! 👋</em>
          </p>
        </div>
      </div>
    </figure>
  )
}
