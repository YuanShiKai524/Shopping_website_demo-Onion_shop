import React, { Suspense, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import axios from 'axios'
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

  const location = useLocation()

  useEffect(() => {
    // 發送請求取得網頁標題數據，監聽路徑改變，以改變網頁標題
    axios('/data/titles.json')
    .then(
      response => document.title = response.data[decodeURIComponent(location.pathname)],
      err => console.log(err)
    )
  }, [location.pathname])

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

