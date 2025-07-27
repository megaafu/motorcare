"use client";
import { useTranslations } from "next-intl";
import { Activities } from "../../constants/timeline";

const CustomTimeLine = () => {
  const t = useTranslations("About");
  return (
    <div className="mx-auto ">
      <ul className="hidden gap-8 border-b-2 border-t-2 py-4 md:grid md:grid-cols-3 lg:grid-cols-6">
        {Activities.activities.map((event, index) => (
          <li key={index} className="flex  space-x-4">
            <div className="ml-4">
              <div className="flex gap-2">
                <div className="flex  rounded-full bg-blue-100 px-2 py-2 ring-0 ring-white sm:ring-8">
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
                <time className="mb-1 block py-2 font-normal leading-none text-light-text">
                  {event.date}
                </time>
              </div>

              <div className=" text-lg">{t(event.event)}</div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="space-y-6 sm:hidden">
        {Activities.activities.map((event, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex gap-2 rounded-full bg-blue-100 p-2 ring-0 ring-white sm:ring-8">
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
              <time className="mb-1 block font-normal leading-none text-light-text">
                {event.date}
              </time>
            </div>
            <div className="mt-3">
              <div className="text-lg">{t(event.event)}</div>
            </div>
          </li>
        ))}
      </ul>
      {Activities.activities.length === 0 && (
        <p className="mt-4 text-lg text-light-text">No activities available.</p>
      )}
    </div>
  );
};

export default CustomTimeLine;
