"use client"

import { useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { IUsedCar } from '@/model/usedCar'
import { useTranslations } from 'next-intl'
import { BASEURL } from '@/lib/util/util'
import Slider from 'react-slick'

interface VehicleGalleryProps {
  vehicle: IUsedCar
}

export default function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const t = useTranslations('Vehicles')


  const images = useMemo(() => {
    try {
      const parsedImages: string[] = JSON.parse(vehicle.car_image)

      return parsedImages.map((imagePath, index) => {

        const fullImageUrl = `${BASEURL}${imagePath}`

        return {
          id: index + 1,
          src: fullImageUrl,
          alt: `${vehicle.brand} ${vehicle.model} - Image ${index + 1}`,
          label: `Image ${index + 1}`
        }
      })
    } catch (error) {
      console.error('Error parsing car_image JSON:', error)

      let fallbackSrc = vehicle.car_image

      if (!fallbackSrc.startsWith('http://') && !fallbackSrc.startsWith('https://')) {
        const cleanPath = fallbackSrc.startsWith('/') ? fallbackSrc.slice(1) : fallbackSrc
        fallbackSrc = `${BASEURL}${cleanPath}`
      }

      return [{
        id: 1,
        src: fallbackSrc,
        alt: `${vehicle.brand} ${vehicle.model}`,
        label: 'Main Image'
      }]
    }
  }, [vehicle.car_image, vehicle.brand, vehicle.model])

  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sliderRef = useRef<Slider>(null)
  const sliderSettings = {
    dots: true,
    infinite: images.length > 1,
    autoplay: images.length > 1,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setSelectedImageIndex(next),
    customPaging: (i: number) => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500 transition-colors duration-200" />
    ),
    dotsClass: "slick-dots !bottom-4",
  }

  const thumbnailSliderSettings = {
    dots: false,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: Math.min(6, images.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(4, images.length),
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(3, images.length),
        }
      }
    ]
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden shadow-2xl"
      >
        <div className="aspect-video">
          {images.length == 1 ? (
            <div className="relative">
              <div
                className="aspect-video cursor-pointer"
                onClick={() => {
                  setSelectedImageIndex(0)
                  setIsModalOpen(true)
                }}
              >
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <Slider ref={sliderRef} {...sliderSettings}>
              {images.map((image, index) => (
                <div key={image.id} className="relative">
                  <div
                    className="aspect-video cursor-pointer"
                    onClick={() => {
                      setSelectedImageIndex(index)
                      setIsModalOpen(true)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </motion.div>

      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-4"
        >
          <Slider {...thumbnailSliderSettings}>
            {images.map((image, index) => (
              <div key={image.id} className="px-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-4 transition-all duration-300 ${selectedImageIndex === index
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-300'
                    }`}
                  onClick={() => {
                    setSelectedImageIndex(index)
                    sliderRef.current?.slickGoTo(index)
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      )
      }

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-full w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length === 1 ? (
                <div className="relative">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={1200}
                    height={800}
                    className="object-contain rounded-lg mx-auto"
                    quality={100}
                    sizes="90vw"
                  />
                </div>
              ) : (
                <Slider
                  {...{
                    ...sliderSettings,
                    initialSlide: selectedImageIndex,
                    beforeChange: (current: number, next: number) => setSelectedImageIndex(next),
                    customPaging: (i: number) => (
                      <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-100 transition-all duration-200" />
                    ),
                    dotsClass: "slick-dots !bottom-6",
                  }}
                >
                  {images.map((image) => (
                    <div key={image.id} className="relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="object-contain rounded-lg mx-auto"
                        quality={100}
                        sizes="90vw"
                      />
                    </div>
                  ))}
                </Slider>
              )}

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  )
}
