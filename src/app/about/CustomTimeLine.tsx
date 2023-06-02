"use client"

import React from 'react';
import Paragraph from './Paragraph';

interface TimelineEvent {
  title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const CustomTimeLine: React.FC<TimelineProps> = ({ events }) => {
  return (
    <ol className="flex justify-center mx-auto">
      {events.map((event, index) => (
        <li key={index} className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-800 dark:text-blue-300"
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
            {index !== events.length - 1 && (
              <div className="flex w-full bg-gray-200 h-0.5"></div>
            )}
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-xl font-semibold text-gray-900 ">{event.title}</h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.date}
            </time>
            <Paragraph>{event.description}</Paragraph>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default CustomTimeLine;
