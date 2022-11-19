import { IS_GRID, UPDATE_PRODUCTS, IS_DEFAULT_RANK, IS_HIGH_TO_LOW, IS_LOW_TO_HIGH, IS_A_TO_Z, IS_Z_TO_A } from "../constant";

export const updateProducts = data => ({type: UPDATE_PRODUCTS, data});
export const setIsGrid = data => ({type: IS_GRID, data});
export const setIsDefaultRank = data => ({type: IS_DEFAULT_RANK, data});
export const setIsHighToLow = data => ({type: IS_HIGH_TO_LOW, data});
export const setIsLowToHigh = data => ({type: IS_LOW_TO_HIGH, data});
export const setIsAToZ = data => ({type: IS_A_TO_Z, data});
export const setIsZToA = data => ({type: IS_Z_TO_A, data});