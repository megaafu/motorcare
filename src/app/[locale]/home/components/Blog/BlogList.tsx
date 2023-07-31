"use client"
import BlogCard from '@/components/Card/BlogCard'
import LateralScroll from '@/components/ui/LateralScoll'
import Row from '@/components/ui/Row'
import SecundaryButton from '@/components/ui/SecundaryButton'
import useBlogs from '@/hooks/use-blogs'
import { useTranslations } from 'next-intl'
import BlogSkeletion from './BlogSkeletion'

const BlogList = () => {
  const { data, isLoading } = useBlogs()
  const t = useTranslations("Home")
  return (
    <>
      {isLoading?<BlogSkeletion/>:data ? (
        <>
          <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-3">
            {data.slice(0, 3).map((post) => {
              return <BlogCard key={post.id} blog={post} />
            })}
          </Row>
          <LateralScroll className="lg:hidden">
            {data.slice(0, 3).map((post) => {
              return <BlogCard key={post.id} blog={post} />
            })}
          </LateralScroll>
          <SecundaryButton label={t('view_more')} />
        </>
      ) : null}
    </>
  )
}

export default BlogList
