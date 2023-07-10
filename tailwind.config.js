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
        primary: '#006bb8',
        secundary: '#ff8e00',
        ancent: '#002257',
        'light-text': '#555555',
      },
      backgroundImage: {
        hero: "url('../../public/images/bg-hero.png')",
        brochure: "url('../../public/images/bg-brochure.png')",
        'cars-hero': "url('../../public/images/bg-cars-hero.png')",
        'about-hero': "url('../../public/images/bg-about.png')",
        'request-hero': "url('../../public/images/bg-request.png')",
        nissan: 'url(../../public/images/nissan_background.png)',
        informative: 'url(../../public/images/informative.png)',
        footer: 'url(../../public/images/footer.png)',
      },
    },
  },
  plugins: [],
}
