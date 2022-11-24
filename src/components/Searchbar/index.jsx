import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { Spin } from 'antd';

const Searchbar = () => {

  // 熱門關鍵字區塊數據
  const populars = ["平板電腦", "韓系美妝", "藍芽耳機", "春夏男裝", "登山鞋", "口罩", "日式零嘴", "加州葡萄酒"];

  const location = useLocation()

  // 儲存每次打字時，hint關鍵字的狀態
  const [hints, setHints] = useState([]);
  // 搜尋列是否onFocus的狀態
  const [hasFocused, setHasFocused] = useState(false);

  // 請求狀態及總hints的值
  const initProcess = {
    allHints: {}, // 所有hints數據的值
    isLoading: true, // 是否處於加載中
    err: '' // 存儲請求相關的錯誤訊息
  }
  const [process, setProcess] = useState(initProcess)

  useEffect(() => {
    // 發送請求獲取hint關鍵字數據
    axios('/data/hints.json')
      .then((response) => {
        setProcess({ ...initProcess, isLoading: false, allHints: response.data })
        setHints([response.data[decodeURIComponent(location.pathname)][0]])
      }).catch((err) => {
        setProcess({ ...initProcess, isLoading: false, err })
      });
  }, [])

  // 比對搜尋列跟提示連結的函數
  const matchHint = (event, path) => {
    if (event.target.value === "") {
      setHints([process.allHints[path][0]]);
    } else {
      const resultsArr = process.allHints[path].filter((hint) => {
        return hint.indexOf(event.target.value) !== -1 && event.target.value.trim() !== ""
      })
      if (resultsArr.length === 0) {
        setHints([]);
      } else {
        setHints(resultsArr);
      }
    }
  }

  // 在window上加一個點擊事件，讓關鍵字提示區塊隱藏
  window.addEventListener('click', (event) => {
    if (!event.target.matches(".searchbar-input")) {
      setHasFocused(false);
    }
  })
  
  return (
    <div className="search-section-wrapper flex">
      {/* <!-- 搜尋欄 區塊 --> */}
      <div className="searchbar-container flex">
        {/* <!-- 搜尋列 --> */}
        <input className="searchbar-input" name="searchbar-input" placeholder={process.isLoading ? "" : process.allHints[decodeURIComponent(location.pathname)][0]} onChange={(event) => { matchHint(event, decodeURIComponent(location.pathname)) }} onFocus={() => {setHasFocused(true)}} />
        {/* <!-- 按下搜尋列跑出的區塊 --> */}
        <div className={hasFocused ? "show searchbar-pop" : "searchbar-pop"}>
          {
            process.isLoading ? <Spin /> :
              process.err ? <h1>{process.err}</h1> :
                hints.map((hint) => {
                  return (
                    <a key={nanoid()}>{hint}</a>
                  )
                })
          }
        </div>
        {/* <!-- 熱門關鍵字 區塊 --> */}
        <div className="popular-search-container">
          {
            populars.map((popular) => {
              return <a key={nanoid()}>{popular}</a>
            })
          }
        </div>
      </div>
      {/* <!-- 搜尋鍵 --> */}
      <div className="searchbtn-container flex">
        <button className="searchbtn flex" type="submit" >
          <img src='/images/icons/search_icon.png' style={{ width: "14px" }} alt="header_icon" />
        </button>
      </div>
    </div>
  )
}

export default Searchbar
