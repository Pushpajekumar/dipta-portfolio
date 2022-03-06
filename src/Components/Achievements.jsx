import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Achievements = () => {
  return (
    <div name="achievements" className='text-white'>
      <div className='text-center mt-6 text-base md:text-lg'>
        <p>WHAT I ACHIEVE</p>
        <h1 className='text-center  text-2xl -mt-2 font-extrabold underline decoration-green-500 md:text-5xl'>Achievements</h1>
      </div>
      <div className='md:my-24'>
        <Splide options={{
          rewind: true,
          autoplay: true,
          interval: 1000,

        }}>
          <SplideSlide >
            <div class="max-w-md mx-auto mt-10 bg-white rounded-xl  shadow-md overflow-hidden  md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="./images/1stA.jpg" alt="Man looking at item at a store" />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">45th Annual Award</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Receiving award from principal sir..</a>
                  <p class="mt-2 text-slate-500">In my life i received many awards but this award is very important in my life.This is the award i won in 2018.This is the first big award given by our principal sir. I got it at my college's 45th annual exhibition. I got the award for my wood carving work. The principal of the college handed over the award to me.</p>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide >

            <div class="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img class="h-48 w-full object-cover md:h-full md:w-48" src="./images/3rdA.jpg" alt="Man looking at item at a store" />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Exhibition</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Exihibition Day....</a>
                  <p class="mt-2 text-slate-500">In this picture,The moment of observing my work, the HOD of my college was next to the work, along with the senior artist, and the principal of the college And there were Jishnu Deb Barman, is an Indian politician from Tripura. He is currently serving as Deputy Chief Minister of the Indian state of Tripura.</p>
                </div>
              </div>
            </div>

          </SplideSlide>

        </Splide>
      </div>
    </div>
  )
}

export default Achievements