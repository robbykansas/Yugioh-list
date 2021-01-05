import React from 'react'

function Navbar(props) {
  function goHome() {
    console.log('goHome')
  }
  function RitualMonster() {
    const type = 'ritual%20monster'
    props.changeType(type)
  }
  function RitualEffectMonster() {
    const type = 'ritual%20effect%20monster'
    props.changeType(type)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href={goHome}>Yu-Gi-Oh Card List</a>
      <div className="dropdown mr-auto">
      <button className="btn btn-sm btn-outline-primary rounded-pill font-weight-bold text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filter
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href={RitualMonster}>Ritual Monster</a>
        <a className="dropdown-item" href={RitualEffectMonster}>Another action</a>
      </div>
    </div>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href='#' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                List Type
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href={RitualMonster}>Ritual Monster</a>
                <a className="dropdown-item" href={RitualEffectMonster}>Another action</a>
              </div>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar