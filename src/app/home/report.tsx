
import Subscribe from '@/components/Subscribe'
import Container from '@/components/ui/Container'
import PagePadding from '@/components/ui/PagePadding'
import React from 'react'

const InformativeReport = () => {
  return (
    <div className="w-full bg-informative bg-no-repeat bg-cover bg-center">
        <Container>
            <PagePadding>
                <div className="flex justify-between items-center">
                    <div className='flex flex-col'>
                        <span className='text-gray-300 text-md'>subscribe to our</span>
                        <span className='text-white text-2xl'>Informative Report</span>
                    </div>
                   <Subscribe/>
                </div>
            </PagePadding>
        </Container>
    </div>
  )
}

export default InformativeReport