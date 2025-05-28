/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // To integrate with Astro's existing dark mode toggle
  theme: {
    extend: {
      colors: {
        julesDarkBg: '#1D0245',
        julesEditorBg: '#2A0B5C',
        julesPurple: {
          '50': '#FAF5FF',
          '300': '#D8B4FE',
          '400': '#C084FC',
          '500': '#A855F7',
        },
        julesAmber: {
          '50': '#FFFBEB',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
