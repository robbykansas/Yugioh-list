import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useHistory } from 'react-router-dom'

function Navbar(props) {
  const history = useHistory()
  function goHome() {
    if (history.location.pathname === '/') {
      console.log('already in this route')
    } else {
      history.push('/')
    }
  }

  function goFavorites() {
    if (history.location.pathname === '/Favorites') {
      console.log('already in this route')
    } else {
      history.push('/Favorites')
    }
  }

  function HandleSelect(e) {
    const type = e.replace(/ /g,"%20").toLowerCase()
    props.changeType(type)
  }

  const TypeMonster = [
    "Effect Monster",
    "Flip Effect Monster",
    "Flip Tuner Effect Monster",
    "Gemini Monster",
    "Normal Monster",
    "Normal Tuner Monster",
    "Pendulum Effect Monster",
    "Pendulum Flip Effect Monster",
    "Pendulum Normal Monster",
    "Pendulum Tuner Effect Monster",
    "Ritual Effect Monster",
    "Ritual Monster",
    "Skill Card",
    "Spell Card",
    "Spirit Monster",
    "Toon Monster",
    "Trap Card",
    "Tuner Monster",
    "Union Effect Monster",
  ]

  const ExtraDeckType = [
    "Fusion Monster",
    "Link Monster",
    "Pendulum Effect Fusion Monster",
    "Synchro Monster",
    "Synchro Pendulum Effect Monster",
    "Synchro Tuner Monster",
    "XYZ Monster",
    "XYZ Pendulum Effect Monster",
  ]

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href='#/goHome' onClick={goHome}>Yu-Gi-Oh Card List</a>
      { history.location.pathname === '/' && (
        <DropdownButton id="dropdown-basic-button" title="Main Deck Types" onSelect={HandleSelect} style={{marginRight: '5px'}}>
          {TypeMonster.map(type => <Dropdown.Item key={ type } href={`#type${type.replace(/\s/g, '')}`} eventKey={ type }>{ type }</Dropdown.Item>)}
        </DropdownButton>
      )}
      { history.location.pathname === '/' && (
        <DropdownButton id="dropdown-basic-button" title="Extra Deck Types" onSelect={HandleSelect} variant='secondary' style={{marginRight: '5px'}}>
          {ExtraDeckType.map(type => <Dropdown.Item key={ type } href={`#type${type.replace(/\s/g, '')}`} eventKey={ type }>{ type }</Dropdown.Item>)}
        </DropdownButton>
      )}
      <button className='btn btn-outline-primary' onClick={goFavorites}>Favorites</button>
      </nav>
    </div>
  )
}

export default Navbar