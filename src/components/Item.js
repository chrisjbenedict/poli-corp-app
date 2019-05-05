import React from 'react';

const Item = ({ item, handleDeleteItem, handleEditItem, hidden, handleCancelEdit }) => {
  return(
    <div>
      <ol>
        <h2>{item}</h2>
        {hidden ?
          <button
            className='ui mini primary button'
            onClick={() => handleEditItem(item)}
          >
            EDIT
          </button>
          :
          <button
            onClick={handleCancelEdit}
            className='ui mini button'
          >
            CANCEL
          </button>}
        <button
          onClick={() => handleDeleteItem(item)}
          className="ui mini yellow button"
        >
          DELETE
        </button>
      </ol>
    </div>
  )
}

export default Item
