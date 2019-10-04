import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {GET_USERS, SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS} from '../types'


const GithubState = props => {
    const initialState = {
        users: [],
        searchResult:[],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    const searchUsers = async (user) => {
        let users = await state.users.filter(item => {
            return item.login.includes(user)
        })
        dispatch({type: SEARCH_USERS, payload: users})               
    }

    const cleanSearch = () => dispatch({type: GET_USERS, payload: state.users})
    

    // Get All Users
    const getUsers = async () => {
        setLoading()
        const res = await axios.get('https://api.github.com/users?per_page=30')
        dispatch({type: GET_USERS, payload: res.data})
    }

    // Get User
    const getUser = async login => {
        setLoading()
        const res = await axios.get('https://api.github.com/users/' + login)
        dispatch({type: GET_USER, payload: res.data})
    }

    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})

    return <GithubContext.Provider value={
        {
            users: state.users,
            searchResult: state.searchResult,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            getUser,
            getUsers,
            searchUsers,
            cleanSearch
        }
    }>
        {
        props.children
    } </GithubContext.Provider>
}

export default GithubState
