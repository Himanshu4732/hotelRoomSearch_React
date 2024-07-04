import React, { useEffect, useRef } from 'react'

function ReviewCont({ image, flex, heading, content }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.classList.remove('flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'); // remove any existing flex direction classes
      divRef.current.classList.add(flex);
    }
  }, [flex]);

  return (
    <div ref={divRef} className='w-3/4 px-10 py-5 flex items-center justify-between  gap-20'>
      <img src={image} className='w-2/5 rounded-xl' alt="" />
      <span className='flex flex-col gap-5'>
        <h2 className='text-2xl leading-tight font-bold'>{heading}</h2>
        <span className='w-1/2'>
          {content}
        </span>
        <button className='w-1/4 py-2 rounded-2xl cursor-pointer border-black border'>Show detail</button>
      </span>
    </div>
  )
}

export default ReviewCont
