
export const SECONDARY_PAGES = {
  CONTACT: {
    name: 'Contact',
    url: '/contact'
  },
  SUBSCRIBE: {
    name: 'Susbscribe',
    url: '/subscribe'
  },
  PRIVACY_POLICY: {
    name: 'Privacy policy',
    url: '/privacy-policy'
  },
}
export const ARRAY_SECONDARY_PAGES = Object.keys(SECONDARY_PAGES).map(page => SECONDARY_PAGES[page]);

const PAGES = {
  HOME: {
    name: 'Home',
    url: '/'
  },
  OUR_STORY: {
    name: 'Our Story',
    url: '/our-story'
  },
  LIGHT_A_CANDLE:{
    name: 'Light a Candle',
    url: '/light-a-candle'
  },
  RECEIVE_A_BLESSING: {
    name: 'Receive a blessing',
    url: '/receive-a-blessing'
  },
  A_PRAYER_FOR_HUMANITY: {
    name: 'A prayer for humanity',
    url: '/a-prayer-for-humanity'
  },

  WHO_WE_ARE: {
    name: 'Who we are',
    url: '/who-we-are',
  }
}
export const ARRAY_PAGES = Object.keys(PAGES).map(page => PAGES[page]);

export default PAGES;