module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {       
         'hero-pattern': "url('/imgs/mantas-hesthaven-_g1WdcKcV3w-unsplash(2).jpg')",          
          },
      colors: {
        "lorry-primary": "#FFCE15",
        "lorry-secondary": "#146C53",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      }
    },
      fontFamily: {
        poppins: ["poppins,sans-serif"],
      },
      container: {
        center: true ,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        }
      }
 
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
