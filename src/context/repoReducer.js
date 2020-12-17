const repoReducer = (state, action) => {
  switch(action.type) {
    case "GET_REPOS": 
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "CLEAR_REPOS":
      return {
        ...state,
        loading: false,
        repos: []
      }
    default: 
      return state
  }
}

export default repoReducer