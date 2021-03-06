import Header from "./Header"
import Footer from './Footer'


const Layout = ({children}) => {
  return (
      <div className='min-vh-100 d-flex flex-column justify-content-between mt-4 pt-4'>
        <Header/>
        <div className='container'>
        {children}
        </div>
        <Footer />
     </div>
  )
}

export default Layout
