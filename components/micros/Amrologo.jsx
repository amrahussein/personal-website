// import Image from 'next/image';

export default function Amrologo({ w = 200, h = 200, style }) {
  return (
    <figure className="">
      <div className="ml-4 bg-accent inline-block rounded-full  ring ring-primary">
        <img
          className={style}
          src="/img/amrologo.jpg"
          alt="Picture of the author"
          width={w}
          height={h}
        />
        <figcaption className=" hidden">amromoorie</figcaption>
        <div className="text-gray-500 flex flex-col justify-center items-center">
          <h1 className="mt-[0.2rem]">
            <span className="text-primary font-extrabold">@</span>{' '}
            <strong>amromoorie</strong>
          </h1>
          <br></br>

          <p className="mb-[1rem] text-sm">
            {/* <em>Let&apos;s do it!</em> */}
            <em>Hello World! 👋</em>
          </p>
        </div>
      </div>
    </figure>
  );
}
