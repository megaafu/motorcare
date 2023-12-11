"use client"
import useBanners from '@/hooks/use-banners'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import BannerItem from './BannerItem'

const BannerCarousel = () => {
  const { data, isLoading } = useBanners()
  return (
    <>
      {isLoading ? (<div className='w-full h-[85vh]'></div>) : data ? (
        <Carousel
          className=''
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
          showIndicators={true}
          showArrows={false}
          stopOnHover={false}
          emulateTouch={true}
          interval={6000}
          transitionTime={1000}

        >
          {data.map((banner) => <BannerItem banner={banner} />)}
        </Carousel>) : null}
    </>

  )
}

export default BannerCarousel