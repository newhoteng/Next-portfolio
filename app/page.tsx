import Image from 'next/image'

export default function Home() {
  return (
    <section className="border-2 border-yellow-500 h-full flex items-center justify-center">
      <div className='text-center border-2'>
        <h1 className="border-2 text-4xl font-bold text-secondary mb-6">Hi, my name is <br className='md:hidden' />Harriet Oteng.</h1>
        <p className="border-2">I'm a Full-stack Software Developer and SVG animation enthusiast from Ghana.</p>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='border-2 flex items-center justify-center gap-2'>
            <Image
              src="/link.svg"
              alt="link icon"
              // className="dark:invert"
              width={30}
              height={30}
              priority
              className='border-2'
            />
            <p>view my projects</p>
          </div>
          <div>
            Icon
            <p>more about me</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// font-bold text-5xl md:text-7xl text-primary
