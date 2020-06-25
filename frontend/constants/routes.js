const PAGES = {
  HOME: {
    name: 'Home',
    url: '/'
  },
  ABOUT_US: {
    name: 'About Us',
    url: '/about-us'
  },
  LIBRARY:{
    name: 'Library',
    url: '/library-of-resources'
  },
  LIGHT_A_CANDLE:{
    name: 'Light a Candle',
    url: '/light-a-candle'
  },
  A_BLESSING_DAY: {
    name: 'A Blessing a Day',
    url: '/a-blessing-a-day'
  },
  SUSCRIBE: {
    name: 'Subscribe',
    url: '/subscribe',
  }
}
export const ARRAY_PAGES = Object.keys(PAGES).map(page => PAGES[page]);

export default PAGES;
