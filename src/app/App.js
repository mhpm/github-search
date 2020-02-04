import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import GithubState from "../context/github/githubState"
import AlertState from "../context/alert/alertState"
import Finder from "../views/finder/Finder"
import User from "../views/finder/User"
import NotFound from "../views/NotFound"
import Header from "../components/layout/Header"

const App = () => {
  console.log("updated")
  return (
    <BrowserRouter>
      <GithubState>
        <AlertState>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/github-search/" component={Finder}></Route>
              <Route exact path="/users/:login" component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </AlertState>
      </GithubState>
    </BrowserRouter>
  )
}

export default App
