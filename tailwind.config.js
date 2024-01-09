/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FF7B1A',
          900: '#FF7B1A', // 主色
          700: '#FF974D', // 主色2
          50: '#FFF8F2', // 底色
        },
        'secondary': '#9CDAF7', // 次要色
        'tertiary': '#FEFDC7', // 第三色
        'content': '#404040', // 内文
      },
    },
  },
  plugins: [],
}

