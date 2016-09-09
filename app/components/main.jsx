import React from 'react';
import { Link } from 'react-router';

function Main() {
  return (
    <div className="full-page">
      <div className="content text-center">
        <h1> Hipster TODO </h1>
        <Link to="/register" className="btn btn-primary">Register </Link>
        <Link to="/login" className="btn btn-success"> Login </Link>
      </div>
    </div>
  )
}

export default Main;
