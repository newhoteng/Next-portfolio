import React from 'react';

const dataSource = ['A', 'B']

const Projects = () => {
  return (
    <section className='h-full border-2 border-black'>
      <div className='border-2 h-1/2 flex items-center justify-center'>
        <div className='max-h-full w-full max-w-[800px] aspect-video rounded-2xl border-2 border-red-500'></div>
      </div>
      <div className='snap-mandatory snap-y overflow-auto border-2 h-1/2'>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Metrics</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Bookstore</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Metrics</div>
        <div className='snap-always snap-center flex items-center justify-center font-bold text-3xl h-full border-2 border-red-600'>Bookstore</div>
      </div>
    </section>
  )
}

export default Projects