import { IBlog } from '@/model/blog'
import PrimaryButton from '../ui/PrimaryButton'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import CardRoot from './CardRoot'
import CardSub from './CardSub'
import CardTitle from './CardTitle'

interface BlogCardProps {
  blog: IBlog
}
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <CardRoot>
      <CardImage image={blog.image} />
      <div className="w-[80vw]  px-4 py-6 lg:w-auto">
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>
          <p className="text-md text-gray-700 lg:text-lg">{blog.subtitle}</p>
        </CardDescription>
        <CardSub>
          <p className="text-md font-bold text-light-text">{blog.status}</p>
          <PrimaryButton>Read More</PrimaryButton>
        </CardSub>
      </div>
    </CardRoot>
  )
}

export default BlogCard
