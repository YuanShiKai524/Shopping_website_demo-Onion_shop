import { UPDATE_PRODUCTS } from '../constant'

const initState = {
  products: [],
  isGrid: true,
};

const sortReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case UPDATE_PRODUCTS:
      const { sortType, flag, arr } = data
      const { products } = preState
      
      if (sortType === 'isGrid') {
        return { products: arr, isGrid: flag }
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
            console.log("reducer-lowHigh", newPhones1, products)
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
            console.log("reducer-AZ", newPhones2, products)
            return { ...preState, products: newPhones2 }

          default:
            console.log("reducer-default", arr, products)
            return { ...preState, products: arr }
        }
      }

    default:
      return preState;
  }
}

export default sortReducer