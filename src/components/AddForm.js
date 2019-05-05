import React from 'react';

const AddForm = ({ itemToAdd, handleFormChange, handleAddItem }) => {
  return (
    <div>
      <br/>
      <div className='ui input focus'>
        <input
          type='text'
          placeholder={itemToAdd}
          onChange={handleFormChange}
          id='form'
        />
      </div>
      <button
          onClick={handleAddItem}
          className="ui teal button"
        >
          ADD ITEM
        </button>
    </div>
  )
}

export default AddForm
