import { IBlog } from '@/model/blog'
import CardButton from './CardButton'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import CardRoot from './CardRoot'
import CardTitle from './CardTitle'

interface BlogCardProps {
  blog: IBlog
}
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <CardRoot>
      <CardImage image={blog.image} />
      <div className="w-[80vw] md:w-[40vw]  px-4 py-6 lg:w-auto">
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>
          <p className="text-md text-gray-700 lg:text-lg">{blog.subtitle}</p>
        </CardDescription>
        <div className=' h-12'></div>
        <CardButton>
          Read More
        </CardButton>
      </div>
    </CardRoot>
  )
}
export default BlogCard
