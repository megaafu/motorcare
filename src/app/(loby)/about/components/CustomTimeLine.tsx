'use client'

import { Activities } from '../constants/timeline'

const CustomTimeLine = () => {
  return (
    <ol className="mx-auto flex justify-center">
      {Activities.activities.map((event, index) => (
        <li key={index} className="relative ">
          <div className="flex items-center">
            <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white sm:ring-8">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-ancent"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            {index !== Activities.activities.length - 1 && (
              <div className="flex h-0.5 w-full bg-gray-200"></div>
            )}
          </div>
          <div className="mt-3 pr-12">
            <time className="text-md mb-2 block font-normal leading-none text-light-text ">
              {event.date}
            </time>
            <div className="text-lg ">{event.event}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default CustomTimeLine
