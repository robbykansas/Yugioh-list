import React from 'react'
import TableCard from './components/TableCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = { cards: [] }
  }

  componentDidMount() {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=ritual%20effect%20monster')
      .then(response => response.json())
      .then(data => {
        this.setState({cards: data.data})
      })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <table className='table'>
          <thead>
            <tr className='table-dark'>
              <td>Id</td>
              <td>Image</td>
              <td>Name</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <TableCard cards={this.state.cards} />
        </table>
      </div>
    )
  }
}

export default App;
