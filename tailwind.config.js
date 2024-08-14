/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nissan)'],
      },
      colors: {
        primary: '#5d5151',
        secundary: '#5c0000',
        ancent: '#443b3b',
        'light-text': '#2B415A',
      },
      backgroundImage: {
        hero: "url('/images/bg-hero.png')",
        brochure: "url('/images/bg-brochure.png')",
        'cars-hero': "url('/images/bg-cars-hero.png')",
        'about-hero': "url('/images/bg-about.JPG')",
        'request-hero': "url('/images/bg-request.png')",
        nissan: "url('/images/nissan_background.png')",
        informative: "url('/images/informative.png')",
        footer: "url('/images/footer.png')",
      },
    },
  },
  plugins: [],
}
