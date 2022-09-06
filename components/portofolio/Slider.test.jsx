import { useState, useEffect } from 'react';


export default function Slider ({imgSrc}) {
    const slidesCount = imgSrc.length
    const [slideIdx, setSlideIdx] = useState(1)
    console.log('slideIdx: ', slideIdx);
    console.log('slidesCount: ', slidesCount);
    const [slides, setSlides] = useState(null)
    console.log('imgSrc:>>> ', imgSrc);
    
//     useEffect(() => {
//         setSlides(imgSrc)

// }, [slides])


    const slideNext = () => setSlideIdx(slideIdx + 1)
    const slidePrevious = () => setSlideIdx(slideIdx - 1)
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const [controlledSwiper, setControlledSwiper] = useState(null);
  
    // const slides = [];
//     <img
//     src={`https://picsum.photos/id/${i + 1}/500/300`}
//     style={{ listStyle: 'none' }}
//     classNameName='swiper-container'
//     alt={`Slide ${i}`}
//   />
  
    // const thumbs = [];
    // for (let i = 0; i < 5; i += 1) {
    //   thumbs.push(
    //     <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
    //       <img
    //         src={`https://picsum.photos/id/${i}/163/100`}
    //         alt={`Thumbnail ${i}`}
    //       ></img>
    //     </SwiperSlide>
    //   );
    // }
  
    // const slides2 = [];
    // for (let i = 9; i < 14; i += 1) {
    //   slides2.push(
    //     <SwiperSlide key={`slide-${i}`} tag="li">
    //       <img
    //         src={`https://picsum.photos/id/${i + 1}/500/300`}
    //         style={{ listStyle: 'none' }}
    //         alt={`Slide ${i}`}
    //       />
    //     </SwiperSlide>
    //   );
    // }


    const showSlides = () => {
        if (slideIdx < 1) setSlideIdx(slidesCount)
        if (slideIdx > 1) setSlideIdx(1)

        return (
            imgSrc && imgSrc.map((src, idx) => (

                <div key={idx} className="duration-700 ease-in-out" data-carousel-item>
                <img           src={src}
 className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
            </div>
 ))
        )
        
    }
  
    return (

        <div  className="relative" >
        <div className="overflow-hidden relative h-72  rounded-lg">

            {showSlides()}

           
           
        </div>

        
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {/* {imgSrc &&  imgSrc.map((src, idx) => (
                
                <button type="button" className="bg-accent w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>

))

} */}
        </div>



        <button onClick={slidePrevious} type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary sm:w-6 sm:h-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
                <span className="hidden">Previous</span>
            </span>
        </button>

        <button onClick={slideNext} type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>
    );
}

