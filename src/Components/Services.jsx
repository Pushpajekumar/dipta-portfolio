import React from 'react'

const Services = () => {
  return (
    <div name="services" className='text-white'>
      <div className='text-center mt-8 text-base md:text-lg'>
        <p>WHAT I DO</p>
        <h1 className='text-center  text-2xl -mt-2 font-extrabold underline decoration-green-500 md:text-5xl'>Services</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center md:mt-8 '>

        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white my-6">
          <img class="w-full" src="/images/Sculpture.jpg" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-black text-2xl mb-2">Sculpture</div>
            <p class="text-gray-700 text-lg">
              <p className='hover:scale-125 transition duration-500'>- 3D Modeling</p>
              <p className='hover:scale-125 transition duration-500'>- Fiber</p>
              <p className='hover:scale-125 transition duration-500'>- Cement</p>
              <p className='hover:scale-125 transition duration-500'>- Silicon</p>
              <p className='hover:scale-125 transition duration-500'>- Any type of Sculpture Work</p>
            </p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sculpture</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paintings</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Applied Arts</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Photography</span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white my-6">
          <img class="w-full" src="/images/painting.jpg" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-black text-2xl mb-2">Paintings</div>
            <p class="text-gray-700 text-lg">
              <p className='hover:scale-125 transition duration-500'>- Pencil Sketch</p>
              <p className='hover:scale-125 transition duration-500'>- Landscape Works</p>
              <p className='hover:scale-125 transition duration-500'>- Water Color painting</p>
              <p className='hover:scale-125 transition duration-500'>- Acrylic painting</p>
              <p className='hover:scale-125 transition duration-500'>- mixed medium paintings
              </p>
            </p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sculpture</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paintings</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Applied Arts</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Photography</span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white my-6">
          <img class="w-full" src="/images/Appliedart.jpg" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-black text-2xl mb-2">Applied Arts</div>
            <p class="text-gray-700 text-lg">
              <p className='hover:scale-125 transition duration-500'>-Advertisements</p>
            </p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sculpture</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paintings</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Applied Arts</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Designing</span>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white my-6">
          <img class="w-full" src="/images/design.jpg" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-black text-2xl mb-2">Designing</div>
            <p class="text-gray-700 text-lg">
              <p className='hover:scale-125 transition duration-500'>- Graphic Designing</p>
            </p>
          </div>
          <div class="px-6 pt-2 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Sculpture</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Paintings</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Applied Arts</span>
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Designing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services