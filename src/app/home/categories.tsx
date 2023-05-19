import React from 'react'
import HorizontalScroll from './horizontalScroll'
import Menu from '../../components/menu'

type CategoryProps = {
    cars:string[]
}

const Categories:React.FC<CategoryProps> = ({cars})=> {
  return (
    <div className="py-10">
          <Menu title='Categories' navigation={["Hatch","Sedan", "Picape"]}/>
          <HorizontalScroll>
            {
              cars.map((car, index) => {
                return (
                  <div className="flex justify-center px-20 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                      <img className="mx-auto pt-8" src={car} alt=""/>
                      <p className='text-bold text-2xl px-12 py-4'> Nissan</p>
                    </a>
                    
                  </div>
                )
              })
            }
          </HorizontalScroll>
        </div>
  )
}

export default Categories