import React, {useContext, useEffect, useState} from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = props => {
    const githubContext = useContext(GithubContext)
    const [search, setSearch] = useState("")

    useEffect(() => {
        if(search !== '') githubContext.searchUsers(search)
        else githubContext.cleanSearch()
    }, [search])
 
    return (
        <div className='form mb-4'>
            <div className="input-group">
                <input value={search} onChange={ e => setSearch(e.target.value)} className='form-control border-0' placeholder='search...' type="text"/>
                <div className="input-group-append">
                    <div
                        disabled
                        className="btn bg-light text-black-50 "
                       >
                        <i className="fas fa-search fa-sm"></i>
                    </div>
                    {
                        search.length > 0 && 
                            <button 
                                onClick={() => setSearch("")}
                                className="btn btn-danger" 
                                type="button"
                            >
                                <i className="fas fa-trash fa-sm"></i>
                            </button>
                    } 
                </div>
            </div>
            <div className="input-group mt-1">
                
            </div>
        </div>
    )
}

export default Search
