/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  corePlugins: {
    // preflight: false, https://www.tailwindcss.cn/docs/preflight
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
