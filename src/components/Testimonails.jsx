import React from 'react'
import {assets, testimonialsData} from '../assets/assets'



const Testimonails = () => {
  return (
    <div className='container mx-auto py-4 px-6 pt-20 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonails'>
        <h1 className=' text-2xl sm:text-4xl text-center font-bold mb-2'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
          {testimonialsData.map((testimonial, index)=>(
            // max-w-340, py-12 from video
            <div key={index} className='max-w-[310px] border-amber-50  shadow-lg rounded px-8 py-8 text-center'>
              <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4 ' />

              <h2 className='text-xl text-gray-700 font-medium'>{testimonial.alt}</h2>
              <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>

              <div className='flex justify-center gap-1 text-red-500 mb-4'>
                {Array.from({length: testimonial.rating}, (item, index)=>(
                  <img src={assets.star_icon} alt="" />
                ))}
              </div>

              <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          ))}
        </div>




    </div>
  )
}

export default Testimonails