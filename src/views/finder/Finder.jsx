import React, { useContext, useEffect, useState } from "react"
import GithubContext from "../../context/github/githubContext"
import AlertContext from "../../context/alert/alertContext"
import Search from "./Search"
import Users from "./Users"
import Alert from "../../components/Alert"

const Finder = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  useEffect(() => {
    githubContext.getUsers()
    //alertContext.setAlert("Welcome to Github search")
  }, [])

  return (
    <div className="mt-4">
      <Search />
      <Alert />
      <div className="row">
        <Users />
      </div>
    </div>
  )
}

export default Finder
