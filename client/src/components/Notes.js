import React from 'react';

const Notes = ({note}) => {
  return (
  <>
      <section className=" mt-10 mb-5">
           <p className='lg:w-1/2 text-justify'>{note}</p>
         </section>
  </>
  )
}

export default Notes

