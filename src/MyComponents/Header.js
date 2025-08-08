import React from 'react'
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      {props.searchBar? <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>: ""}
    </div>
  </div>
</nav>
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool.isRequired
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}
// The above code defines a Header component that accepts props for title and searchBar visibility.
// It uses Bootstrap for styling and includes a navigation bar with links and a search form.

// PropTypes are used to enforce the types of props passed to the component, ensuring that title is a string and searchBar is a boolean.
// Default props are provided to ensure the component has a title and search bar by default if not specified.
// The component can be used in other parts of the application to display a consistent header across pages