import Image from 'next/image';

export default function Amrologo() {
  return (
    <figure>
      <Image
        className="rounded-full hover:"
        src="/img/amrologo.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
        // placeholder="blur"
      />
      {/* <figcaption className=' hidden'>
        amromoorie
      </figcaption> */}
      <div className="text-gray-500 flex flex-col justify-center items-center">
        <p>
          <strong>Hello World!👋</strong>
        </p>
        <br></br>

        <p className='mt-[-1.5rem] mr-5'><em>Let&apos;s do it!</em></p>
      </div>
    </figure>
  );
}
