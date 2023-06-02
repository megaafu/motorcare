/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-nissan)']
      },
      backgroundImage: {
        'hero': "url('../../public/images/bg-hero.png')",
        'brochure': "url('../../public/images/bg-brochure.png')",
        'cars-hero': "url('../../public/images/bg-cars-hero.png')",
        'about-hero': "url('../../public/images/bg-about.png')",
        'nissan':"url(../../public/images/nissan_background.png)",
        'informative':"url(../../public/images/informative.png)",
        'footer':"url(../../public/images/footer.png)"
      },
    },
  },
  plugins: [],
}
