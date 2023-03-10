const Navigation = (props) => {
    return (
        <nav className="navbar">
        <div className="navbar__background"></div>
        <a className="navbar__name" href="#home">Jeffrey Aeschliman</a>

        <ul className="navbar__list">
          <li>
            <a id="active" className="navbar__link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#section-about">
              About
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#section-skills">
              Skills
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#section-portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="navbar__link" href="#section-contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation