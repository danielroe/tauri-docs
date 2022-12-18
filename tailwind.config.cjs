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
          primary: '#24c8db',
          secondary: '#ffc131',
          accent: '#24c8db',
          neutral: '#2f2f2f',
          'base-100': '#070707',
          'base-200': '#0f0f0f',
          'base-content': '#f6f6f6',
        },
        light: {
          primary: '#24c8db',
          secondary: '#ffc131',
          accent: '#24c8db',
          neutral: '#2f2f2f',
          'base-100': '#070707',
          'base-200': '#0f0f0f',
          'base-content': '#f6f6f6',
        },
      },
    ],
  },
}
