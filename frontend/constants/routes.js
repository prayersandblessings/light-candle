
export const SECONDARY_PAGES = {
  CONTACT: {
    name: 'Contact',
    url: '/contact',
    className: 'contact',
  },
  SUBSCRIBE: {
    name: 'Subscribe',
    url: '/subscribe',
    className: 'subscribe'
  },
  PRIVACY_POLICY: {
    name: 'Privacy policy',
    url: '/privacy-policy',
    className: 'privacyPolicy',
  },
}
export const ARRAY_SECONDARY_PAGES = Object.keys(SECONDARY_PAGES).map(page => SECONDARY_PAGES[page]);

const PAGES = {
  HOME: {
    name: 'Home',
    url: '/',
    className: 'home',
  },
  OUR_STORY: {
    name: 'Our Story',
    url: '/our-story',
    className: 'ourStory',
  },
  LIGHT_A_CANDLE:{
    name: 'Light a Candle',
    url: '/light-a-candle',
    className: 'lightACandle',
  },
  RECEIVE_A_BLESSING: {
    name: 'Receive a blessing',
    url: '/receive-a-blessing',
    className: 'receiveAblessing',
  },
  A_PRAYER_FOR_HUMANITY: {
    name: 'A prayer for humanity',
    url: '/a-prayer-for-humanity',
    className: 'aPrayerForHumanity',
    disabled: true
  },
  WHO_WE_ARE: {
    name: 'Who we are',
    url: '/who-we-are',
    className: 'whoWeAre',
  }
}
export const ARRAY_PAGES = Object.values(PAGES);

export const ALL_PAGES = { ...SECONDARY_PAGES, ...PAGES };

export default PAGES;