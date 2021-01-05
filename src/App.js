import React from 'react'
import TableCard from './components/TableCard'
import useFetch from './hooks/useFetch'

function App () {
  const {
    data: card,
    loading,
    error
  } = useFetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=ritual%20effect%20monster')

  if(error) return <h2>Error</h2>
  if(loading) return <img src='https://ak6.picdn.net/shutterstock/videos/28831216/thumb/1.jpg' alt='loadingImg' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
  return (
    <div className='container'>
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
        <TableCard cards={card.data} />
      </table>
    </div>
  )

}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = { cards: [] }
//   }

  // componentDidMount() {
  //   fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=ritual%20effect%20monster')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({cards: data.data})
  //     })
  // }
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <table className='table'>
//           <thead>
//             <tr className='table-dark'>
//               <td>Id</td>
//               <td>Image</td>
//               <td>Name</td>
//               <td>Description</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <TableCard cards={this.state.cards} />
//         </table>
//       </div>
//     )
//   }
// }

export default App;
