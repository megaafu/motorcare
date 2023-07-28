import BlogCardSkeletion from "@/components/Skeletion/BlogCardSkeletion"
import LateralScroll from "@/components/ui/LateralScoll"
import Row from "@/components/ui/Row"

const BlogSkeletion = () => {
    const totalItems=3 
    const items = new Array(totalItems).fill(null)
  return (
    <>
        <Row className="grid-col-1 hidden gap-8 lg:grid lg:grid-cols-3">
            {items.map((_,index) => {
              return <BlogCardSkeletion key={index} />
            })}
        </Row>
        <LateralScroll className="lg:hidden">
            {items.map((_,index) => {
              return <BlogCardSkeletion key={index} />
            })}
        </LateralScroll>
    </>
  )
}

export default BlogSkeletion