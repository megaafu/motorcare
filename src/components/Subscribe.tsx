"use client"
import { useTranslations } from "next-intl"

const Subscribe = () => {
  const t = useTranslations("Home")
  return (
    <form action="#">
      <div className="flex space-y-0 md:w-[560px]">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-light-text"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            className="focus:ring-primary-500 focus:border-primary-500 w-full  rounded-none rounded-l-lg border-gray-300 bg-gray-50 p-3 pl-10 text-lg text-light-text"
            placeholder={t('email')}
            type="email"
            id="email"
            name="email" // Add name attribute for better form handling
            required // Add required attribute for HTML5 form validation
          />
          <label htmlFor="email" className="sr-only">
            {t('email')}
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="hover:bg-accent cursor-pointer rounded-none rounded-r-lg bg-primary px-5 py-3 text-center text-lg text-white"
          >
            {t('sub')}
          </button>
        </div>
      </div>
    </form>
  )
}

export default Subscribe
