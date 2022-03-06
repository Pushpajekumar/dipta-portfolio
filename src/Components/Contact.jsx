import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='text-white '>
      <div className='text-center mt-2 text-base md:text-lg'>
        <p>HOW YOU CONTACT</p>
        <h1 className='text-center  text-2xl -mt-2 font-extrabold underline decoration-green-500 md:text-5xl'>Contact ME</h1>
      </div>
      <div className='md:flex md:justify-evenly md:my-6'>
        <div className='my-8 space-y-6 text-center '>
          <div className='text-center'>
            <h1 className='font-bold text-lg '>Full Name</h1>
            <input className='caret-green-500 bg-gray-600 text-white  h-8 w-72 rounded-xl' type="name" />
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-lg '>Email</h1>
            <input className='caret-green-500 bg-gray-600 text-white h-8 w-72 rounded-xl' type="email" />
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-lg '>Message</h1>
            <textarea className="caret-green-500 bg-gray-600 text-white h-28 w-72 rounded-2xl "></textarea>
          </div>
          <button className='bg-green-500 py-2 px-12 rounded-2xl  text-3xl hover:bg-black hover:text-green-500 md:text-left md:mt-10'>
            Send
          </button>
        </div>
        <div className='my-8'>
          <div className='grid justify-items-center'>
            <img className='h-10 ' src="./images/email.png" alt="Email" />
            <p>nathdipta77@gmail.com</p>
          </div>
          <div className='flex justify-center my-4 md:hidden'>
            <a href="https://www.facebook.com/dipta.nath.357">
              <img className='h-10 mx-6' src="./images/fb.png" alt="facebook" /></a>
            <a href="https://www.instagram.com/dazzot_/">
              <img className='h-10 mx-6' src="./images/insta.png" alt="insta" /></a>
            <a href="https://twitter.com/dipta_nath7?t=OPmcqKzdGtlyRp6aW1Nw-g&s=08">
              <img className='h-10 mx-6' src="./images/Twitter.png" alt="twitter" /></a>
          </div>
          <div className=' justify-center my-4 none hidden md:block '>
            <div className='flex my-6'>
              <a href="https://www.facebook.com/dipta.nath.357">
                <img className='h-10 mx-6 ' src="./images/fb.png" alt="facebook" /> </a>
              <a href="https://www.facebook.com/dipta.nath.357">
                <p className='hidden md:block md:text-lg'>  Diptä Nath</p>
              </a>
            </div>
            <div className='flex my-6'>
              <a href="https://www.instagram.com/dazzot_/">
                <img className='h-10 mx-6 ' src="./images/insta.png" alt="facebook" /></a>
              <a href="https://www.instagram.com/dazzot_/">
                <p className='hidden md:block md:text-lg'>  dazzot_</p></a>
            </div>
            <div className='flex my-6'>
              <a href="https://twitter.com/dipta_nath7?t=OPmcqKzdGtlyRp6aW1Nw-g&s=08">
                <img className='h-10 mx-6 ' src="./images/Twitter.png" alt="facebook" /></a>
              <a href="https://twitter.com/dipta_nath7?t=OPmcqKzdGtlyRp6aW1Nw-g&s=08"><p className='hidden md:block md:text-lg'>  @dipta_nath7</p></a>
            </div>
            <div className='flex my-6'>
              <img className='h-10 mx-6 ' src="./images/Whatsapp.png" alt="facebook" />
              <p className='hidden md:block  text-lg'> +91 7005425755</p>
            </div>
            <div className='flex my-6'>
              <img className='h-10 mx-6 ' src="./images/phone.png" alt="facebook" />
              <p className='hidden md:block text-lg'> +91 7005425755</p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Contact