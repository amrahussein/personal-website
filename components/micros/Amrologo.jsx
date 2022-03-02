export default function Amrologo({ w = 200, h = 200 }) {
  return (
    <figure>
      <div className='border-2 border-accent inline-block rounded-full '>
        <img
          className='rounded-full'
          src={'/img/amrologo.jpg'}
          alt='Picture of the author'
          width={w}
          height={h}
        />
        <figcaption className=' hidden'><h1>Amr Abdelkamel</h1></figcaption>
        <div className='text-gray-500 flex flex-col justify-center items-center'>
          <h1 className='mt-[0.2rem]'>
            <span className='text-primary font-extrabold'>@</span>{' '}
            <strong className="text-secondary opacity-70 ... sm:text-sm md:text-base">amromoorie</strong>
          </h1>
          <br></br>

          <p className='mb-[1rem] mt-[-0.7rem] text-sm text-secondary'>
            <em>Hello World! 👋</em>
          </p>
        </div>
      </div>
    </figure>
  )
}
