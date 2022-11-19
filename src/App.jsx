import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
import Loading from './components/Loading'
// 引入路由表
import routes from './routes'
// 引入SrollToTop組件，讓頁面跳轉後自動滾動至最上方
import ScrollToTop from './helpers/SrollToTop'
import './App.css'

const App = () => {
  // 路由表
  const element = useRoutes(routes)

  return (
    <div id='app'>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        {element}
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
