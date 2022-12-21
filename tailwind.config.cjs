/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  /** @type {import('daisyui').Config} */
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#24C8DB',
          secondary: '#2f2f2f',
          accent: '#FFC131',
          neutral: '#f6f6f6',
          'base-100': '#070707',
          'base-200': '#1b1b1b',
          'base-300': '#1f1f1f',
        },
        light: {
          // Should be the same variables as dark
        },
      },
    ],
  },
}
