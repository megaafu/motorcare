import CardDescription from "../Card/CardDescription"
import CardRoot from "../Card/CardRoot"
import CardSub from "../Card/CardSub"
import CardTitle from "../Card/CardTitle"
import PrimaryButton from "../ui/PrimaryButton"

const BlogCardSkeletion = () => {
 
  return(
      <CardRoot className=" lg:aspect-[4/3]">
          <div className=" aspect-[4/3] bg-slate-500 w-full h-[300px] lg:h-3/4 animate-pulse"></div>
          <div className="px-4 py-6">
              <CardTitle>
                  <div className=" h-4 w-[80%] bg-slate-400 rounded animate-pulse"></div>
              </CardTitle>
              <CardDescription >
                  <div className="mt-4 h-3 w-[70%] bg-slate-300 rounded animate-pulse"></div>
              </CardDescription>
              <CardSub>
                  <div className=" "></div>
                  <PrimaryButton>Read More</PrimaryButton>
              </CardSub>
          </div>
      </CardRoot>
    )
      
  
}

export default BlogCardSkeletion