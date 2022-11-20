import { UPDATE_PRODUCTS, UPDATE_SIDEBAR_PRODUCTS } from '../constant'

const initState = {
  products: [],
  isGrid: true,
  sidebarProducts: [] // 專門保存Sidebar使用的商品數據
};

const sortReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case UPDATE_PRODUCTS:
      const { sortType, flag, arr } = data
      const { products } = preState
      
      if (sortType === 'isGrid') {
        return { ...preState, products: arr, isGrid: flag }
      } else {
        // 排序商品數據
        switch (sortType) {
          case 'isLowToHigh':
          case 'isHighToLow':
            const newPhones1 = []
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < products.length; j++) {
                if (arr[i] === products[j].price) {
                  newPhones1.push(products[j])
                }
              }
            }
            return { ...preState, products: newPhones1 }

          case 'isAToZ':
          case 'isZToA':
            const newPhones2 = []
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < products.length; j++) {
                if (arr[i] === products[j].model) {
                  newPhones2.push(products[j])
                }
              }
            }
            return { ...preState, products: newPhones2 }

          default:
            return { ...preState, products: arr }
        }
      }

    case UPDATE_SIDEBAR_PRODUCTS:
      return {...preState, sidebarProducts: data}

    default:
      return preState;
  }
}

export default sortReducer