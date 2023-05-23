import React from 'react'


import { IBlog } from '@/core/model/blog'
import Container from '@/components/ui/Container'
import Menu from '@/components/Menu'
import ContentPadding from '@/components/ui/ContentPadding'
import PagePadding from '@/components/ui/PagePadding'
import SecundaryButton from '@/components/ui/SecundaryButton'

type BlogProps = {
    blogs:IBlog[]
}

const Blog:React.FC<BlogProps> = ({blogs}) => {
    return (
           
            <Container>
                <PagePadding>
                    <Menu title='Blog' navigation={["All","Trending", "last Week"]}/>   
                    <ContentPadding>
                        <div className="flex justify-between">
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
                                            <p className="text-sm pt-2 text-gray-700 ">{post.description}</p>
                                        </div>
                                        <div className='flex justify-between pt-8'>
                                            <h1 className="text-md font-bold text-gray-700">{post.date}</h1>
                                            <a href="#" className="inline-flex items-center px-4 py-2 text-md font-regular text-center text-white bg-sky-700 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                </PagePadding>
                
            </Container>
  )
}

export default Blog