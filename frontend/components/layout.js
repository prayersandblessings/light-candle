import Nav from './nav'
import styles from './layout.module.scss'
import Link from 'next/link'
import PAGES from '../constants/routes'

const SecondaryNav = () => (
  <div className={styles.secondaryNav}>
    <Link as={PAGES.A_BLESSING_DAY.url} href={PAGES.A_BLESSING_DAY.url}>
      A Blessing a Day
    </Link> |
    <a>Subscribe</a>
    <ul>
      <li>
        <a href="" className={styles.facebook}>Facebook</a>
      </li>
      <li>
        <a href="" className={styles.twitter}>Twitter</a>
      </li>
    </ul>
  </div>
)

const Layout = ({ children, categories }) => (
  <> 
    <div className={styles.content}>
      {children}
    </div>
    <Nav categories={categories} />
    <SecondaryNav />
  </>
)

export default Layout
