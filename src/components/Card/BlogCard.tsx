"use client"
import { IBlog } from '@/model/blog'
import CardButton from './CardButton'
import CardDescription from './CardDescription'
import { motion } from 'framer-motion'
import CardRoot from './CardRoot'
import CardTitle from './CardTitle'
import { useTranslations } from 'next-intl'
import ImageCarousel from './ImageCarousel'
import { useState } from 'react'

interface BlogCardProps {
  blog: IBlog
}
const BlogCard = ({ blog }: BlogCardProps) => {
  const [autoPlay, setAutoPlay] = useState(false)
  const handleAutoPlay = () => {
    setAutoPlay((oldAutoPlay: boolean) => {
      return (oldAutoPlay = !oldAutoPlay)
    })
  }
  const images: string[] = JSON.parse(blog.image)
  const t = useTranslations("Home")
  return (
    <motion.div onHoverStart={handleAutoPlay} onHoverEnd={handleAutoPlay}>
      <CardRoot>
        <ImageCarousel
          images={images}
          autoPlay={autoPlay}
          interval={1500}
          transitionTime={2000}
        />
        <div className="w-[80vw] md:w-[40vw]  px-4 py-6 lg:w-auto">
          <CardTitle>{blog.title}</CardTitle>
          <CardDescription>
            <p className="text-md text-gray-700 lg:text-sm">{blog.subtitle}</p>
          </CardDescription>
          <div className=' h-12'></div>
          <CardButton>
            {t("read_more")}
          </CardButton>
        </div>
      </CardRoot>
    </motion.div>
  )
}
export default BlogCard
