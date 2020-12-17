import React, { useReducer } from "react"
import axios from "axios"

import repoContext from "./repoContext"
import repoReducer from "./repoReducer"

let githubClientId
let githubClientSecret

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const RepoState = props => {
  const initialState = {
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(repoReducer, initialState);

  const getRepos = async text => {
    setLoading(true)
    
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${text}&sort=stars&order=desc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      )

    dispatch({
      type: "GET_REPOS",
      payload: res.data.items
    })
  }

  const clearRepos = () => dispatch({ type: "CLEAR_REPOS" })

  const setLoading = () => dispatch({ type: "SET_LOADING" })

  return (
    <repoContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        getRepos,
        clearRepos
      }}
    >
      {props.children}
    </repoContext.Provider>
  )
}

export default RepoState