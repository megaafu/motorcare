import React from 'react'

type Props = {}

const Subscribe = (props: Props) => {
  return (
    <form action="#">
        <div className="flex space-y-0 w-[560px]">
            <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input className="p-3 pl-10 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" type="email" id="email"/>
            </div>
            <div>
                <button type="submit" className="py-3 px-5 w-full text-lg text-center text-white rounded-lg border cursor-pointer bg-sky-700 sm:rounded-none sm:rounded-r-lg hover:bg-sky-800 focus:ring-4 focus:ring-primary-300">Subscribe</button>
            </div>
        </div>
    </form>
  )
}

export default Subscribe