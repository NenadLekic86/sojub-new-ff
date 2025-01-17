/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['bangers', 'sans-serif'],
        general: ['poppins-bold', 'sans-serif'],
        regular: ['poppins-regular', 'sans-serif'],
        'poppins-semibold': ['poppins-semibold', 'sans-serif'],
        SegoeUISemiBold: ['SegoeUI-SemiBold', 'sans-serif'],
        'Inter24pt-Regular': ['Inter24pt-Regular', 'sans-serif'],
        'Inter24pt-Medium': ['Inter24pt-Medium', 'sans-serif'],
        'Inter24pt-SemiBold': ['Inter24pt-SemiBold', 'sans-serif'],
        InterBold: ['Inter24pt-Bold', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "#545963",
          200: "#49475A"
        },
        orange: {
          100: "#BD7536",
          200: "#FD9125",
        },
        red: {
          100: "#A62F2E",
          200: "#DB3847",
        },
        yellow: {
          100: "#F6C95B",
          200: "#D0CD9A",
          300: "#F8C125",
        },
        green: {
          100: "#6CE585",
          200: "#303F41",
          300: "#40893D",
        },
        brown: {
          100: "#252223",
        },
      },
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(to bottom, #EBE8B4 0%, #EBE8B4 60%, #D0CD9A 60%, #D0CD9A 100%)',
        'yellow-gradient-rev': 'linear-gradient(to top, #EBE8B4 0%, #EBE8B4 60%, #D0CD9A 60%, #D0CD9A 100%)',
        'yellow-gradient-two': 'linear-gradient(to bottom, rgb(255, 241, 139) 0%, rgb(255, 241, 139) 50%, rgba(255, 153, 51, 0.4) 50%, rgb(255, 153, 51) 80%)',
        'orange-gradient': 'linear-gradient(to bottom, #FD9125 0%, #FD9125 60%, #FD9125 60%, #FD9125 100%)',
        '3d-gradient': 'linear-gradient(to bottom, #ffffff 0%, #cccccc 100%)',
        'orange-gradient-mmm': 'linear-gradient(to bottom, rgba(248, 193, 37, 1) 0%, rgba(248, 193, 37, 1) 45%, rgba(253, 251, 106, 1) 55%, rgba(253, 251, 106, 0.3) 65%, rgba(248, 193, 37, 0.3) 75%, rgba(248, 193, 37, 1) 100%)',
      },
      screens: {
        '3xl': '1800px',
      },
      boxShadow: {
        solid: "2px 2px 0 #000",
        'custom-inset': 'inset -1px 1px 0 0 #FFCCA4',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply relative max-w-[74rem] mx-auto px-5 xl:max-w-[74rem]":
            {},
        },
        ".yellowHeading": {
          "@apply bg-yellow-gradient bg-clip-text text-transparent": {},
          background: 'linear-gradient(to bottom, #EBE8B4 0%, #EBE8B4 60%, #D0CD9A 60%, #D0CD9A 100%)', // Fallback for older browsers
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        ".yellowHeadingTwo": {
          "@apply bg-yellow-gradient-two bg-clip-text text-transparent": {},
          background: 'linear-gradient(to bottom, rgb(255, 241, 139) 0%, rgb(255, 241, 139) 50%, rgba(255, 153, 51, 0.4) 50%, rgb(255, 153, 51) 80%)', // Fallback for older browsers
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        ".orangeHeadingMmm": {
          "@apply bg-orange-gradient-mmm bg-clip-text text-transparent": {},
          background: 'linear-gradient(to bottom, rgba(248, 193, 37, 1) 0%, rgba(248, 193, 37, 1) 45%, rgba(253, 251, 106, 1) 55%, rgba(253, 251, 106, 0.3) 65%, rgba(248, 193, 37, 0.3) 75%, rgba(248, 193, 37, 1) 100%)', // Fallback for older browsers
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        ".orangeHeading": {
          "@apply bg-orange-gradient bg-clip-text text-transparent relative": {},
          background: 'linear-gradient(to bottom, #FD9125 0%, #FD9125 60%, #FD9125 60%, #FD9125 100%)', // Fallback for older browsers
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        ".greenHeading": {
          "@apply bg-green-100 bg-clip-text text-transparent": {},
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        ".yellowPinkRev": {
          "@apply bg-yellowPink-linear-rev bg-clip-text text-transparent": {},
        },
        ".yellowGradient": {
          "@apply bg-yellow-gradient bg-clip-text text-transparent": {},
        },
        
      });
    }),
  ],
};
