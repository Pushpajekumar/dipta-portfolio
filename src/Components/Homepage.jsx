import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const Homepage = () => {
  return (
    <div name="Homepage" className='text-white'>
      <div className='mt-10 grid  justify-items-center md:flex md:justify-between '>
        <h1 className='ml-8 text-2xl mt-10 font-black md:text-7xl md:mt-12 md:ml-12 '>I turn your imagination <br />{' '}
          <span >

            <Typewriter
              words={['In To Reality',]}
              loop={25}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </span>
        </h1>
        <img className='h-72 md:h-96 md:mt-20' src="./images/dipta4.jpg" alt="" />
      </div>
      <div className='text-center'>
        <p className='text-white text-3xl font-extrabold font-serif md:text-5xl md:text-left md:px-10 md:-mt-28 lg:-mt-48'>Hello I'm Dipta I Am a {' '}
          <span className='text-green-500'>
            <Typewriter
              words={['Sculpture', 'Painter', 'Artist', 'Designer']}
              loop={20}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </span>
        </p>
        <p className='mt-8 text-lg hidden lg:block text-left ml-10 '>
          I am a small artist in my town.I usually do all kinds of drawing and sculpture art, I even have experience <br /> in applied
          arts and Advertisement art Etc. I did a four year BVA course in sculpture.<br /> I have worked with different mediums in
          the sculpture industry. I have a small studio in which I do my<br /> work.Today I am working with my eight years of
          experience. I try to present reality<br /> in every one of my works. And I hope everyone enjoys watching my work .
        </p>
        <button className='bg-green-500 py-3 px-12 rounded-2xl border-4 text-3xl mt-6 hover:bg-black hover:text-green-500 md:text-left md:mt-10'>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>Contact Me</Link>
        </button>
      </div>
    </div>
  )
}

export default Homepage

