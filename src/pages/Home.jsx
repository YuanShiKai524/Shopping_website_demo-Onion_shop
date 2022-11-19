import React, { useEffect } from 'react'
import Header from '../containers/Header'
import Main from '../components/Main'
import titles from '../data/titles.json'

const Home = () => {

  useEffect(() => {
    document.title = titles.home;
  })

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Home
