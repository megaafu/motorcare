/* eslint-disable @next/next/no-img-element */
import ContentPadding from '@/components/ui/ContentPadding'
import SecundaryButton from '@/components/ui/SecundaryButton'
import { IBlog } from '@/model/blog'
import Image from 'next/image'
import React from 'react'

interface BlogProps {
  blogs: IBlog[]
}

const BlogList: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <ContentPadding>
      <div className=" grid grid-cols-3 gap-8">
        {blogs.map((post, index) => {
          return (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white shadow"
            >
              <a key={index} href="#" className="">
                <Image
                  width={1080}
                  height={1080}
                  key={index}
                  src={post.image}
                  alt="{post.image}"
                  className="w-full rounded-t-lg"
                />
              </a>
              <div key={index} className="p-5">
                <div key={index} className="pt-4 ">
                  <h1 key={index} className="text-xl font-bold ">
                    {post.title}
                  </h1>
                  <p key={index} className="text-md pt-2 text-light-text ">
                    {post.description}
                  </p>
                </div>
                <div key={index} className="flex justify-between pt-8">
                  <h1 key={index} className="text-md font-bold text-light-text">
                    {post.date}
                  </h1>
                  <a
                    key={index}
                    href="#"
                    className="text-md font-regular inline-flex items-center rounded-lg bg-primary px-4 py-2 text-center text-white hover:bg-ancent "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <SecundaryButton label="View More" />
    </ContentPadding>
  )
}

export default BlogList
