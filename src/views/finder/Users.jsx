import React , {useContext}from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../../components/Spinner'
import List from '../../components/List'

const Users = () => {
    const githubContext = useContext(GithubContext)
    const {searchResult, loading} = githubContext

    if (loading)
        return <div className="col-md text-center"><Spinner /></div>
    else {
        return (
            <List colection={searchResult} keys={['avatar_url', 'login'] }/>
        )
    }
}
        
export default Users
        