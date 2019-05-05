import React from 'react';

const EditForm = ({ hidden, itemToEdit, onEditChange, submitEdit }) => {
  return (
    <div hidden={hidden}>
      <div className="ui input focus">
        <input
          type='text'
          placeholder={itemToEdit}
          onChange={onEditChange}
        />
        <button onClick={submitEdit} className='ui primary button'>EDIT</button>
      </div>
    </div>
  )
}

export default EditForm
