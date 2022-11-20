import { UPDATE_PRODUCTS } from '../constant'

const initState = {
  products: [],
  sorts: {
    isGrid: true,
    isDefaultRank: true,
    isLowToHigh: false,
    isHighToLow: false,
    isAToZ: false,
    isZToA: false,
  }
};

const sortReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case UPDATE_PRODUCTS:
      const { sortType, flag, arr } = data
      const { products, sorts } = preState
      // 更改排序按鈕樣式
      if (sortType === 'isGrid') {
        return { products: arr, sorts: { ...sorts, isGrid: flag } }
      } else {
        for (let key in sorts) {
          if (key !== 'isGrid' && key !== sortType) {
            sorts[key] = false
          }
          if (key !== 'isGrid' && key === sortType) {
            sorts[key] = true
          }
        }
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
            return { products: newPhones1, sorts }

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
            return { products: newPhones2, sorts }

          default:
            return { products: arr, sorts }
        }
      }

    default:
      return preState;
  }
}

export default sortReducer