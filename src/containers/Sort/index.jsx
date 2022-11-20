import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateProducts } from '../../redux/actions/sort'

const Sort = (props) => {

  const { products: phones, isGrid, updateProducts } = props

  const [fiveSorts, setFiveSorts] = useState({
    isDefaultRank: true, 
    isHighToLow: false, 
    isLowToHigh: false,
    isAToZ: false, 
    isZToA: false
  })
  const { isDefaultRank, isHighToLow, isLowToHigh, isAToZ, isZToA } = fiveSorts

  // 用於保存最一開始的products數據，供defaultRank排序使用
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 請求商品數據
    axios('/data/phones.json')
    .then((response) => {
      updateProducts({sortType: 'isGrid', flag: true, arr: response.data})
      setProducts(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  // 新建一個只有價格的數組
  const pricesArr = phones.map((phone) => {
    return phone.price;
  })
  // 新建一個只有型號的數組
  const modelArr = phones.map((phone) => {
    return phone.model;
  })

  // const updateSortState = (sortType) => {
  //   for (let key in fiveSorts) {
  //     if (key !== sortType) {
  //       fiveSorts[key] = false
  //     } else {
  //       fiveSorts[sortType] = true
  //     }
  //   }
  //   console.log("final", fiveSorts);
  //   return fiveSorts
  // }
  
  return (
    <div className="all-sorts-container flex">
      <div className="orient-sorts-container">
        {/* 標準(直向)排序  */}
        <button type="button" className={isGrid ? "grid-sort sorts-click" : "grid-sort sorts-style"} onClick={() => { updateProducts({sortType: 'isGrid', flag: true, arr: phones}); setFiveSorts({...fiveSorts, isGrid: true})}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isGrid ? "bi bi-grid-3x3-gap-fill svg-click" : "bi bi-grid-3x3-gap-fill svg-style"} viewBox="0 0 16 16">
            <path
              d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
          </svg>
        </button>
        {/* 序列(橫向)排序  */}
        <button type="button" className={isGrid ? "list-sort sorts-style" : "list-sort sorts-click"} onClick={() => { updateProducts({sortType: 'isGrid', flag: false, arr: phones}); setFiveSorts({...fiveSorts, isGrid: false}) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isGrid ? "bi bi-list-ul svg-style" : "bi bi-list-ul svg-click"} viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </button>
      </div>
      <div className="btn-sorts-container">
        <button type="button" className={isDefaultRank ? "default-rank sorts-click" : "default-rank sorts-style"} onClick={() => { updateProducts({sortType: 'isDefaultRank', flag: true, arr: products}); setFiveSorts({...fiveSorts, isDefaultRank: true}) }}>
          <span className={isDefaultRank ? "svg-click" : "svg-style"}>綜合排名</span>
        </button>
        <button type="button" className={isLowToHigh ? "low-to-high-price sorts-click" : "low-to-high-price sorts-style"} onClick={() => { updateProducts({sortType: "isLowToHigh", flag: true, arr: pricesArr}); setFiveSorts({...fiveSorts, isLowToHigh: true}) }}>
          <span className={isLowToHigh ? "svg-click" : "svg-style"}>價格</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isLowToHigh ? "bi bi-sort-numeric-up-alt svg-click" : "bi bi-sort-numeric-up-alt svg-style"} viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
            <path
              d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
          </svg>
        </button>
        <button type="button" className={isHighToLow ? "high-to-low-price sorts-click" : "high-to-low-price sorts-style"} onClick={() => { updateProducts({sortType: "isHighToLow", flag: true, arr: pricesArr}); setFiveSorts({...fiveSorts, isHighToLow: true}) }}>
          <span className={isHighToLow ? "svg-click" : "svg-style"}>價格</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isHighToLow ? "bi bi-sort-numeric-down-alt svg-click" : "bi bi-sort-numeric-down-alt svg-style"} viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
            <path
              d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
          </svg>
        </button>
        <button type="button" className={isAToZ ? "a-to-z-sort sorts-click" : "a-to-z-sort sorts-style"} onClick={() => { updateProducts({sortType: "isAToZ", flag: true, arr: modelArr}); setFiveSorts({...fiveSorts, isAToZ: true}) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isAToZ ? "bi bi-sort-alpha-down svg-click" : "bi bi-sort-alpha-down svg-style"} viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
            <path
              d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
          </svg>
          <span className={isAToZ ? "svg-click" : "svg-style"}>排序</span>
        </button>
        <button type="button" className={isZToA ? "z-to-a-sort sorts-click" : "z-to-a-sort sorts-style"} onClick={() => { updateProducts({sortType: "isZToA", flag: true, arr: modelArr}); setFiveSorts({...fiveSorts, isZToA: true}) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className={isZToA ? "bi bi-sort-alpha-up svg-click" : "bi bi-sort-alpha-up svg-style"} viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
            <path
              d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
          </svg>
          <span className={isZToA ? "svg-click" : "svg-style"}>排序</span>
        </button>
      </div>
    </div>
  )
}

export default connect(
  state => ({products: state.sort.products, isGrid: state.sort.isGrid}),
  { updateProducts }
)(Sort)
