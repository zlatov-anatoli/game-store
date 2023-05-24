import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  items: [],
  totalPrice: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((acc, obj) => {
        return Math.round((obj.price * obj.count) + acc)
      }, 0)
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },

    removeAllItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    decrementCount(state, action) {

      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem.count > 0) {
        findItem.count--
      }
    },


  }



})

export const { addItem, removeItem, removeAllItems, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer

