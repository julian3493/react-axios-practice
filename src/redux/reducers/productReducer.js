import { ActionTypes } from "../constants/action-types"

const initialState = {
  products:[
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    }
  ]
}

export const productReducer = (state, action) => {
  switch (action) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    
    default:
      return state;
  }
}