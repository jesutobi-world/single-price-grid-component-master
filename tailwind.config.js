/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'lightGray' : 'hsl(204, 43%, 93%)',
        'grayishBlue' : 'hsl(218, 22%, 67%)',
        'brightYellow' : 'hsl(71, 73%, 54%) ',
        'cyan' : 'hsl(179, 62%, 43%)',
        'brightCyan':'hsl(179 47% 52%)'
      },
      fontFamily:{
        'Karla':['Karla']
      }
    },
  },
  plugins: [],
}

