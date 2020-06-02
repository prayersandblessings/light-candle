import Nav from './nav'

const Layout = ({ children, categories }) => (
  <>
    
    <Nav categories={categories} />
    <div className='content'>
      {children}
    </div>
  </>
)

export default Layout
