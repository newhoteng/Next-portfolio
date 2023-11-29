import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 h-[calc(100vh-8rem)]'>
      <p className='text-center'>Get in touch below or send me an email directly at <Link href='mailto:harriet.oteng@gmail.com' className='font-semibold'>harriet.oteng@gmail.com</Link></p>
      <form action="https://formsubmit.co/4384d5e4b0272c4b888f0f564164b27c" method="post" className='w-full max-w-[500px] flex flex-col gap-6'>
        <input className="placeholder:italic placeholder:font-extralight focus:outline-none p-2" type="text" id="name" name="name" required placeholder="Name" />
        <input className="placeholder:italic placeholder:font-extralight focus:outline-none p-2" type="text" id="mail" name="email" required placeholder="Email address" />
        <textarea className="placeholder:italic placeholder:font-extralight focus:outline-none p-2" id="message" name="message" required placeholder="Message" rows={5} maxLength={500} />
        <button className="p-2 border-[1px] border-accent rounded-lg" type="submit">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact