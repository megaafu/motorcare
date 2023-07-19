/* eslint-disable @next/next/no-img-element */
import BlogCard from '@/components/Card/BlogCard'
import LateralScroll from '@/components/ui/LateralScolling'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { IBlog } from '@/model/blog'
import React from 'react'

interface BlogProps {
  blogs: IBlog[]
}

const BlogList: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <>
      <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-3">
        {blogs.map((post) => {
          return <BlogCard key={post.id} blog={post} />
        })}
      </Row>
      <LateralScroll className="sm:hidden">
        {blogs.map((post) => {
          return <BlogCard key={post.id} blog={post} />
        })}
      </LateralScroll>
      <SecundaryButton label="View More" />
    </>
  )
}

export default BlogList
