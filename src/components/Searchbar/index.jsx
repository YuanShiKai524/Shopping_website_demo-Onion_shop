import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import allHints from '../../data/hints.json'
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

  // 熱門關鍵字區塊數據(正常來說這個是要去服務器獲取的)
  const populars = ["平板電腦", "韓系美妝", "藍芽耳機", "春夏男裝", "登山鞋", "口罩", "日式零嘴", "加州葡萄酒"];

  const location = useLocation()

  // hint關鍵字的狀態
  const [hints, setHints] = useState([allHints[decodeURIComponent(location.pathname)][0]]);
  // 搜尋列是否onFocus的狀態
  const [hasFocused , setHasFocused] = useState(false);

  // 比對搜尋列跟提示連結的函數
  const matchHint = (event, path) => {
    if (event.target.value === "") {
      setHints([allHints[path][0]]);
    } else {
      const resultsArr = allHints[path].filter((hintLink) => {
        return hintLink.indexOf(event.target.value) !== -1
      })
      if (resultsArr.length === 0) {
        setHints([]);
      } else {
        setHints(resultsArr);
      }
    }
  }
  // 點擊搜尋列讓提示區塊顯示
  const showPopover = () => {
    setHasFocused(true);
  }
  // 搜尋列沒有focus則隱藏提示區塊
  const hidePopover = () => {
    setHasFocused(false);
  }

  return (
    <div className="search-section-wrapper flex">
      {/* <!-- 搜尋欄 區塊 --> */}
      <div className="searchbar-container flex">
        {/* <!-- 搜尋列 --> */}
        <input className="searchbar-input" name="searchbar-input" placeholder={allHints[decodeURIComponent(location.pathname)][0]} onChange={(event) => {matchHint(event, decodeURIComponent(location.pathname))}} onFocus={showPopover} onBlur={hidePopover} />
        {/* <!-- 按下搜尋列跑出的區塊 --> */}
        <div className={hasFocused ? "show searchbar-pop" : "searchbar-pop"}>
          {
            hints.map((hint) => {
              return (
                <a key={nanoid()} href="/">{hint}</a>
              )
            })
          }
        </div>
        {/* <!-- 熱門關鍵字 區塊 --> */}
        <div className="popular-search-container">
          {
            populars.map((popular) => {
              return <a key={nanoid()} href="/">{popular}</a>
            })
          }
        </div>
      </div>
      {/* <!-- 搜尋鍵 --> */}
      <div className="searchbtn-container flex">
        <form action="search_result_handler.php" method="post">
          <button className="searchbtn flex" type="submit" >
            <img src='/images/icons/search_icon.png' style={{ width: "14px" }} alt="header_icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar
