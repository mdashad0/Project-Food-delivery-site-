import React from 'react'
import './List.css'

const List = () => {
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/* Food items will be mapped here */}
      </div> 
    </div>
  )
}

export default List
