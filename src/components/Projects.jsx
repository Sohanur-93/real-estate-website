import React, { useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
  return (
    <div className='container mx-auto py-4 px-6 pt-20 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
        <h1 className=' text-2xl sm:text-4xl text-center font-bold mb-2'>Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/* slider buttons */}

        <div className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="previous" />
            </button>

            <button className='p-3 bg-gray-200 rounded mr-2' aria-level='Next Project'>
                <img src={assets.right_arrow} alt="next" />
            </button>
        </div>

        {/* projects slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title}  className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>

                            <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>

                            <p className='text-gray-500 text-sm'>
                                {project.price} <span>|</span> {project.location}
                            </p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>





    </div>
  )
}

export default Projects