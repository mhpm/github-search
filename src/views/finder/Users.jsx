import React , {useContext}from 'react'
import GithubContext from '../../context/github/githubContext'
import Spinner from '../../components/Spinner'
import { Link } from "react-router-dom"

const Users = () => {
    const githubContext = useContext(GithubContext)
    const {searchResult, loading} = githubContext

    if (loading)
        return <div className="col-md text-center"><Spinner /></div>
    else {
        return (
            searchResult.map((user, index) => (
                <div className="col-sm-3 text-center" key={index}>
                    <div className="card mb-4">
                        <div className='w-100'>
                            <img src={user.avatar_url} className="img-responsive rounded-circle text-center mt-3" alt="..." width="100" height="100" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-dark">{user.login}</h5>
                            <p className="card-text text-black-50">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <Link role="button" className="btn btn-dark btn-sm" to={'/users/' + user.login}>
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        )
    }
}
        
export default Users
        