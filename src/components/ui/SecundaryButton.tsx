import React from 'react'
import { ArrowFoword } from '../icons/Icons'

const SecundaryButton = () => {
  return (
    <div className='flex justify-end pt-10'>
        <a href="#" className='flex group alig-center text-primary gap-2 rounded-lg px-5 border border-transparent py-2 hover:border-primary'>
            <p className='text-xl md:text-xl xl:text-xl '>View More</p>
            <ArrowFoword />
        </a>
    </div>
  )
}

export default SecundaryButton