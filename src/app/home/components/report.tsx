
import Subscribe from '@/components/Subscribe'
import PagePadding from '@/components/ui/PagePadding'
import React from 'react'

const InformativeReport = () => {
  return (
    <div className="w-full bg-informative bg-no-repeat bg-cover bg-center">
        <PagePadding>
            <div className="flex justify-between items-center">
                <div className='flex flex-col'>
                    <span className='text-light-text text-md'>subscribe to our</span>
                    <span className='text-white text-2xl'>Informative Report</span>
                </div>
                <Subscribe/>
            </div>
        </PagePadding>
    </div>
  )
}

export default InformativeReport