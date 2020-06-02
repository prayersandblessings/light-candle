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
    name: 'Libary of Resources',
    url: '/library-of-resources'
  },
  LIGHT_A_CANDLE:{
    name: 'Light a Candle',
    url: '/light-a-candle'
  },
  A_BLESSING_DAY: {
    name: 'A Blessing a Day',
    url: '/a-blessing-a-day'
  }
}
export const ARRAY_PAGES = Object.keys(PAGES).map(page => PAGES[page]);

export default PAGES;
