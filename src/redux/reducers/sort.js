import { IS_GRID, UPDATE_PRODUCTS, IS_DEFAULT_RANK, IS_LOW_TO_HIGH, IS_HIGH_TO_LOW, IS_A_TO_Z, IS_Z_TO_A } from '../constant'

const initState = {
  products: [],
  isGrid: true,
  isDefaultRank: true,
  isLowToHigh: false,
  isHighToLow: false,
  isAToZ: false,
  isZToA: false,
};
 
const sortReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case UPDATE_PRODUCTS:
      return { ...preState, products: data };

    case IS_GRID:
      return { ...preState, isGrid: data };

    case IS_DEFAULT_RANK:
      return { ...preState, isDefaultRank: data, isLowToHigh: false, isHighToLow: false, isAToZ: false, isZToA: false };

    case IS_LOW_TO_HIGH:
      return { ...preState, isDefaultRank: false, isLowToHigh: data, isHighToLow: false, isAToZ: false, isZToA: false };

    case IS_HIGH_TO_LOW:
      return { ...preState, isDefaultRank: false, isLowToHigh: false, isHighToLow: data, isAToZ: false, isZToA: false };

    case IS_A_TO_Z:
      return { ...preState, isDefaultRank: false, isLowToHigh: false, isHighToLow: false, isAToZ: data, isZToA: false };

    case IS_Z_TO_A:
      return { ...preState, isDefaultRank: false, isLowToHigh: false, isHighToLow: false, isAToZ: false, isZToA: data };

    default:
      return preState;
  }
}

export default sortReducer