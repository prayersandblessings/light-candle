import '../assets/scss/style.scss'
import 'nprogress/nprogress.css'
import Router from 'next/router'

const handleRouteChange = async (url) => {
  await setTimeout(()=>{
    let div = document.createElement('div')
    div.className = "loading-overlay"
    document.body.append(div)
  }, 1000)
  
}
const handlePageCompleted = (url) => {
    let [element = {}] = document.getElementsByClassName("loading-overlay")
    element.remove()
}

Router.events.on('routeChangeStart', handleRouteChange)
Router.events.on('beforeHistoryChange', handlePageCompleted)

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
