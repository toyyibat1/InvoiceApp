import React from 'react';

const MainDetails = ({name, address, status})=> {
  return (
      <>
    <section className="flex flex-col items-end justify-end">
    <h2 className=" font-bold text-xl uppercase md:text-2xl">{name}</h2>
    <p>{address}</p>
    <p className='font-bold'>{status} </p>

  </section>
  </>
  )
}
export default MainDetails

