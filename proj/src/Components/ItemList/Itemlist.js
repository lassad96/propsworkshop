import React from 'react'
import Item from '../Item/Item'

const Itemlist = ({itemArray}) => {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">View</th>
      <th scope="col">Model</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
    </thead>
    <tbody>
    {itemArray.map((item,key)=>(
        <Item item={item} />
    ))
}</tbody>
    </table>
  
        </div>
    )
}

export default Itemlist
