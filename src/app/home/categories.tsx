import React from 'react'
import HorizontalScroll from '../../components/ui/HorizontalScroll'
import Menu from '../../components/Menu'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'

interface CategoryProps {
    cars:string[]
}

const Categories:React.FC<CategoryProps> = ({cars})=> {
  return (
    <Container>
          <Menu title='Categories' navigation={["Hatch","Sedan", "Picape"]}/>
          <HorizontalScroll>
            {
              cars.map((car, index) => {
                return (
                  <Card>
                    <div className="flex justify-center px-20 bg-gray-100">
                      <a href="#">
                        <img className="mx-auto pt-8" src={car} alt=""/>
                        <p className='text-bold text-2xl px-12 py-4'> Nissan</p>
                      </a>
                      
                    </div>
                  </Card>
                  
                )
              })
            }
          </HorizontalScroll>
        </Container>
  )
}

export default Categories