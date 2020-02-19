import {
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER
} from "../types"

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        searchResult: action.payload,
        loading: false
      }
    case SEARCH_USERS:
      return {
        ...state,
        searchResult: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
    default:
      return state
  }
}
