import ContentPadding from '@/components/ui/ContentPadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { IBlog } from '@/core/model/blog'
import React from 'react'


interface BlogProps {
    blogs:IBlog[]
}

const BlogList:React.FC<BlogProps> = ({blogs}) => {
  return (
    <ContentPadding>
        <div className=" grid grid-cols-3 gap-8">
            {
            blogs.map((post, index) => {
                return(
                <div className={`bg-white border border-gray-200 rounded-lg shadow `}>
                    <a href="#" className="">
                        <img src={post.image} className='w-full rounded-t-lg'/>
                    </a>
                    <div className='p-5'>
                        <div className='pt-4 '>
                            <h1 className="text-xl font-bold ">{post.title}</h1>
                            <p className="text-md pt-2 text-light-text ">{post.description}</p>
                        </div>
                        <div className='flex justify-between pt-8'>
                            <h1 className="text-md font-bold text-light-text">{post.date}</h1>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-md font-regular text-center text-white bg-primary rounded-lg hover:bg-ancent ">
                                Read more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        <SecundaryButton/>
    </ContentPadding>
  )
}

export default BlogList