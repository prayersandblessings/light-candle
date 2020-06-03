import Nav from './nav'
import styles from './layout.module.scss'

const Layout = ({ children, categories }) => (
  <> 
    <div className={styles.content}>
      {children}
    </div>
    <Nav categories={categories} />
  </>
)

export default Layout
