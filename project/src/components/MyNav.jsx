import { Link } from "react-router-dom"

const MyNav = () => {
  return (
    <nav className="navbar-expand-md navBar">
      <Link className="navbar-brand" style={{ color: "white" }} to="/">West 3 Solutions</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: "white" }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{ color: "white" }} to="/registration">Register CV</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{ color: "white" }} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }}>About</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ContactUs" style={{ color: "white" }}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default MyNav