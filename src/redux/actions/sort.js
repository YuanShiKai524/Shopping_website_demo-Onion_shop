import { UPDATE_PRODUCTS } from "../constant";

export const updateProducts = data => {
  const { sortType, arr } = data
  // 加工數組將其改成排序過的數組
  switch (sortType) {
    case 'isLowToHigh':
      arr.sort((a, b) => {
        return a - b
      })
      return {type: UPDATE_PRODUCTS, data: {...data, arr}}

    case 'isHighToLow':
      arr.sort((a, b) => {
        return b - a
      })
      return {type: UPDATE_PRODUCTS, data: {...data, arr}}

    case 'isAToZ':
      arr.sort()
      return {type: UPDATE_PRODUCTS, data: {...data, arr}}

    case 'isZToA':
      arr.sort()
      arr.reverse()
      return {type: UPDATE_PRODUCTS, data: {...data, arr}}

    default:
      return {type: UPDATE_PRODUCTS, data}
  }
}