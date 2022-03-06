import React from 'react'

const Work = () => {

        const toggleScultupure = () => {
                let Scultupure = document.getElementById('Scultupure')
                let paintings = document.getElementById('paintings')
                let Appliedarts = document.getElementById('Appliedarts')
                let photographs = document.getElementById('photographs')
              if ( (Scultupure.style.display = 'block') && (paintings.style.display = 'block')&& (Appliedarts.style.display = 'block')&&(photographs.style.display = 'block')) {
                Scultupure.style.display = 'block'
                paintings.style.display = 'none'
                Appliedarts.style.display = 'none'
                photographs.style.display = 'none'
              }
        }
        const togglepaintings = () => {
                let Scultupure = document.getElementById('Scultupure')
                let paintings = document.getElementById('paintings')
                let Appliedarts = document.getElementById('Appliedarts')
                let photographs = document.getElementById('photographs')
                if ( (Scultupure.style.display = 'block') && (paintings.style.display = 'block')&& (Appliedarts.style.display = 'block')&&(photographs.style.display = 'block')) {
                        Scultupure.style.display = 'none'
                        paintings.style.display = 'block'
                        Appliedarts.style.display = 'none'
                        photographs.style.display = 'none'
                      }

        }
        const toggleAppliedarts = () => {
                let Scultupure = document.getElementById('Scultupure')
                let paintings = document.getElementById('paintings')
                let Appliedarts = document.getElementById('Appliedarts')
                let photographs = document.getElementById('photographs')
                if ( (Scultupure.style.display = 'block') && (paintings.style.display = 'block')&& (Appliedarts.style.display = 'block')&&(photographs.style.display = 'block')) {
                        Scultupure.style.display = 'none'
                        paintings.style.display = 'none'
                        Appliedarts.style.display = 'block'
                        photographs.style.display = 'none'
                      }
        }
        const togglephotographs = () => {
                let Scultupure = document.getElementById('Scultupure')
                let paintings = document.getElementById('paintings')
                let Appliedarts = document.getElementById('Appliedarts')
                let photographs = document.getElementById('photographs')
                if ( (Scultupure.style.display = 'block') && (paintings.style.display = 'block')&& (Appliedarts.style.display = 'block')&&(photographs.style.display = 'block')) {
                        Scultupure.style.display = 'none'
                        paintings.style.display = 'none'
                        Appliedarts.style.display = 'none'
                        photographs.style.display = 'block'
                      }
        }


        return (
                <div className='text-white'>
                        <div className='md:flex justify-evenly my-16 grid grid-cols-2 grid-rows-2 mx-8s gap-4 mx-6 mt-8'>
                                <button id="hide" onClick={toggleScultupure} className='bg-green-500 border-2 px-5 py-3 mt-12 rounded-lg hover:bg-black hover:text-green-500 border-green-500 '>Sculpture</button>
                                <button id="show" onClick={togglepaintings} className='bg-green-500 border-2 px-5 py-3 mt-12 rounded-lg hover:bg-black hover:text-green-500 border-green-500 '>Paintings</button>
                                <button id="hide1" onClick={toggleAppliedarts} className=' bg-green-500 border-2 px-5 py-3 mt-12 rounded-lg hover:bg-black hover:text-green-500 border-green-500  '>Applied Arts</button>
                                <button id="show1" onClick={togglephotographs} className='bg-green-500 border-2 px-5 py-3 mt-12 rounded-lg hover:bg-black hover:text-green-500 border-green-500 '>Photography</button>
                        </div>
                        <hr className='boder-6 border-gray-700' />
                        <div id='Scultupure' className='my-4'>
                                <h1 className='text-center  text-2xl -mt-2  underline decoration-green-500 md:text-5xl'>Sculpture</h1>
                                <p className='tex-lg text-center mt-8 md:text-4xl'>Clay Sculpture</p>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/1s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/2s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/3s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/4s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/5s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/6s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/7s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/8s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/19s.jpg" alt="" />
                                </div>

                                <p className='tex-lg text-center mt-8 md:text-4xl'>Wood carving Sculpture</p>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/9s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/10s.jpg" alt="" />
                                        <img className='h-52 md:72 lg:96 mt-3' src="./images/11s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/12s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/13s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/14s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/15s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/16s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/20s.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/18s.jpg" alt="" />

                                </div>
                        </div>

                        <div id='paintings' className='my-4'>
                                <h1 className='text-center  text-2xl -mt-2  underline decoration-green-500 md:text-5xl'>Paintings</h1>
                                <p className='tex-lg text-center mt-8 md:text-4xl'>Oil Paintings</p>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/1p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/2p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/3p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/4p.jpg" alt="" />
                                </div>
                                <p className='tex-lg text-center mt-8 md:text-4xl'>Water Colour</p>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/5p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/6p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/7p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/8p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/9p.jpg" alt="" />
                                </div>
                                <p className='tex-lg text-center mt-8 md:text-4xl'>Pencil Sketches</p>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/10p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/11p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/12p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/13p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/15p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/16p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/17p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/18p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/19p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/20p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/21p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/22p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/23p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/24p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/25p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/26p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/27p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/28p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/19p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/30p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/31p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/32p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/33p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/34p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/35p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/36p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/37p.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/38p.jpg" alt="" />

                                </div>
                        </div>
                        <div id='Appliedarts' className='my-4'>
                                <h1 className='text-center  text-2xl -mt-2  underline decoration-green-500 md:text-5xl'>Applied Arts</h1>
                                <div className='grid justify-items-center my-6 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg gap-3'>
                                        <img className='h-96 mt-3' src="./images/1a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/2a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/3a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/4a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/5a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/6a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/7a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/8a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/9a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/10a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/11a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/12a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/13a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/14a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/15a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/16a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/17a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/18a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/19a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/20a.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/21a.jpg" alt="" />
                                </div>
                        </div>
                        <div id='photographs' className='my-4'>
                                <h1 className='text-center  text-2xl -mt-2  underline decoration-green-500 md:text-5xl'>Photography</h1>
                                <div className='grid justify-items-center my-6 lg:grid-cols-2 lg:gap-12'>
                                        <img className='h-96 mt-3' src="./images/5ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/6ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/7ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/12ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/8ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/10ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/3ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/9ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/4ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/13ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/14ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/15ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/16ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/17ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/18ph.jpg" alt="" />
                                        <img className='h-96 mt-3' src="./images/1ph.jpg" alt="" />
                                </div>
                        </div>

                </div>
        )
}

export default Work