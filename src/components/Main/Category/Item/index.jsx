import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Item = () => {

  const initState = [
    { id: "001", cgName: "電腦及周邊", imgUrl: "/images/category_icon/computer.png" },
    { id: "002", cgName: "美妝保養", imgUrl: "/images/category_icon/cosmetic.png" },
    { id: "003", cgName: "飲料/酒類", imgUrl: "/images/category_icon/drinks.png" },
    { id: "004", cgName: "美食甜點", imgUrl: "/images/category_icon/foods.png" },
    { id: "005", cgName: "潮流男裝", imgUrl: "/images/category_icon/man_clothes.png" },
    { id: "006", cgName: "手機及周邊", imgUrl: "/images/category_icon/smartphone_icon.png" },
    { id: "007", cgName: "流行女裝", imgUrl: "/images/category_icon/woman_clothes.png" },
  ]

  const [categories] = useState(initState);

  return (
    <>
      {
        categories.map((category) => {
          const { id, cgName, imgUrl } = category;
          return (
            <div key={id}>  
              <Link to={`/${cgName}`}><img src={imgUrl} alt='category_icon' /></Link>
              <span>{cgName}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default Item
