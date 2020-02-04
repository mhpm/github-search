import React, { useContext, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import GithubContext from "../../context/github/githubContext"
import Spinner from "../../components/Spinner"

const User = props => {
  const githubContext = useContext(GithubContext)
  const { user, loading } = githubContext

  useEffect(() => {
    githubContext.getUser(props.match.params.login)
  }, [])

  if (loading)
    return (
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <Spinner />
        </div>
      </div>
    )
  else
    return (
      <div>
        <br />
        <br />
        <div className="col-12 text-center">
          <div className="card mb-4">
            <Link to={process.env === "production" ? "/github-search/" : "/"}>
              <i
                className="position-absolute fas fa-arrow-circle-left text-black-50 fa-2x"
                style={{ left: 18, top: 15 }}
              ></i>
            </Link>
            <div className="w-100">
              <img
                src={user.avatar_url}
                className="img-responsive rounded-circle text-center mt-3"
                alt="..."
                width="300"
                height="300"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-dark">{user.name}</h5>
              <p className="card-text text-black-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                explicabo eum aliquam inventore error odio non reprehenderit
                itaque, vel, voluptatibus reiciendis, cum saepe incidunt
                exercitationem illo voluptate! Iusto, deleniti voluptatem.
              </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-sm btn-primary">
                Followers:{" "}
                <span className="badge badge-light">{user.followers}</span>
              </button>{" "}
              {"  "}
              <button type="button" className="btn btn-sm btn-danger">
                Following:{" "}
                <span className="badge badge-light">{user.following}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default User
