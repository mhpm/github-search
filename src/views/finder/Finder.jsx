import React, { useContext, useEffect } from "react"
import GithubContext from "../../context/github/githubContext"
//import AlertContext from "../../context/alert/alertContext"
import Search from "./Search"
import UsersList from "./UserList"
import Alert from "../../components/Alert"

const Finder = () => {
  const githubContext = useContext(GithubContext)
  //const alertContext = useContext(AlertContext)

  useEffect(() => {
    githubContext.getUsers()
    //alertContext.setAlert("Welcome to Github search")
  }, [])

  return (
    <div className="mt-4">
      <Search />
      <Alert />
      <div className="row">
        <UsersList />
      </div>
    </div>
  )
}

export default Finder
