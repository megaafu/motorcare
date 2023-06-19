import React from 'react'



interface PrimaryButtonPropos{
    label:string
    type?:any
}

const PrimaryButton:React.FC<PrimaryButtonPropos> = ({label, type}) => {
  return (
        <button className='inline-flex items-center px-8 py-2 text-md font-regular text-center text-white bg-primary rounded-lg hover:bg-ancent ' type={type}>
            {label}
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    )
}

export default PrimaryButton