import React from "react"
import { array, string } from "prop-types"
import { Link } from "react-router-dom"

const List = ({ colection, keys }) => {
  return colection.map((user, index) => (
    <div className="col-sm-3 text-center" key={index}>
      <div className="card mb-4">
        <div className="w-100">
          <img
            src={user[keys[0]]}
            className="img-responsive rounded-circle text-center mt-3"
            alt="..."
            width="100"
            height="100"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-dark">{user[keys[1]]}</h5>
          <p className="card-text text-black-50">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
        </div>
        <div className="card-footer">
          <Link
            role="button"
            className="btn btn-dark btn-sm"
            to={"/users/" + user[keys[1]]}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  ))
}

List.propTypes = {
  colection: array,
  keys: array
}

const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
)

Item.propTypes = {
  text: string,
  title: string
}

export default List
