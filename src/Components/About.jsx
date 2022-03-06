import React from 'react'

const About = () => {
  return (
    <div name="about" className='text-white'>
      <div className='text-center mt-8 text-base md:text-lg'>
        <p>WHO I AM</p>
        <h1 className='text-center  text-2xl -mt-2 font-extrabold underline decoration-green-500 md:text-5xl'>About Me</h1>
      </div>
      <div class=" mt-6 max-w-md mx-auto bg-gray-900 border-gray-700 border-2 rounded-xl shadow-md overflow-hidden md:max-w-full md:px lg:max-w-6xl md:mt-10">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-96 w-full object-cover md:h-full md:w-96" src="/images/dipta4.jpg" alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-green-500 font-semibold">About Me</div>
            <p href="#" class="block mt-1 text-lg leading-tight font-medium text-white hover:underline">Hii I AM Dipta Nath....</p>
            <p class="mt-2 text-gray-300">I started interested in art at the age of 18.  I didn’t start out as a kid because I didn’t grow up in a house full of artists.  I couldn't go to painting class even though I was interested in art since childhood.  Because no one in the family gave permission.

              Although I was fascinated with learning art since childhood, I did not learn it either.  After school I thought I would take admission in art college, but no one in the family agreed.  I completed my B.Sc.  Even then I didn’t let my own inner artist kill.  After college life I decided that I would be admitted to art college and was.  This time of life was very important and four years of this art college achieved a lot in my life.  From there, my desire to be an artist doubled.  Gradually I started learning all kinds of work and I worked on painting and sculpture, advertising.

              I want to convey through all kinds of artwork that I try to present what is happening in the world today.I have a message in every sculpture.I make the sculpture with my own technique and I have my love in each of my sculptures.

              I'm Dipta Nath, I was born 1997. I live in a small village in North Tripura. I have been fascinated with art since I was a child and slowly I learned everything. So far I have presented work in many exhibitions. and I do commercial art works.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About