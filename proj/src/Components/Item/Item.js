import React from 'react'

 const Item = ({item}) => {
    return (
        <>
              <tr>
      <th scope="row"><button>Product details</button></th>
      <td><img src={item.imgSrc} alt={item.name} style={{width: "200px" }}/></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
    </tr>
        </>
    )
}
export default  Item