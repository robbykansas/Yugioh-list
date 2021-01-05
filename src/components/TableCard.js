import React from 'react'

function TableCard (props) {
  return (
    <tbody>
        {props.cards.map(data =>
          <tr key={data.id}>
            <td>{data.id}</td>
            <td><img src={data.card_images[0].image_url_small} alt='gambar'/></td>
            <td>{data.name}</td>
            <td>{data.desc}</td>
            <td>
              <button className="btn btn-outline-primary">Detail</button>
              <button className="btn btn-outline-success">Favorites</button> <br />
              <small>Still not implemented</small>
            </td>
          </tr>
        )}
      </tbody>
  )
}

export default TableCard