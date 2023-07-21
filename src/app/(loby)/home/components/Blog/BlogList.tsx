/* eslint-disable @next/next/no-img-element */
import BlogCard from '@/components/Card/BlogCard'
import LateralScroll from '@/components/ui/LateralScolling'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import useBlogs from '@/hooks/use-blogs'
import { IBlog } from '@/model/blog'
import React from 'react'

interface BlogProps {
  blogs: IBlog[]
}

const BlogList: React.FC<BlogProps> = ({ blogs }) => {
  const { data } = useBlogs()
  return (
    <>
      {data ? (
        <>
          <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-3">
            {data.slice(0, 3).map((post) => {
              return <BlogCard key={post.id} blog={post} />
            })}
          </Row>
          <LateralScroll className="sm:hidden">
            {data.slice(0, 3).map((post) => {
              return <BlogCard key={post.id} blog={post} />
            })}
          </LateralScroll>
          <SecundaryButton label="View More" />
        </>
      ) : null}
    </>
  )
}

export default BlogList
