module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan your React files for Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1c1c1c',
        tertiary: '#3c4039',
        mygreen: '#a2d52d',
        mypink: '#da2780',
      },
      fontFamily: {
        alpha: ['Alfa Slab One', 'cursive'], // Add Alfa Slab One
        source: ['Source Code Pro', 'monospace'], // Add Source Code Pro
      },
    },
  },
  plugins: [],
};