import React, { Component } from 'react'
import AddForm from '../components/AddForm'
import Item from '../components/Item'
import EditForm from '../components/EditForm'
import uuid from 'uuid'

export default class ListContainer extends Component {

  // items: [
  //   {quantity: 12, item: 'EGGS'},
  //   {quantity: 12, item: 'MILK'},
  //   {quantity: 12, item: 'BUTTER'},
  //   {quantity: 12, item: 'BREAD'}
  // ],

  state = {
    items: [
      'EGGS',
      'MILK',
      'BUTTER',
      'BREAD'
    ],
    term: '',
    hidden: true,
    itemToEdit: '',
    edittedItem: '',
    itemToAdd: 'ADD AN ITEM'
  }

  handleFormChange = (e) => {
    this.setState({
      term: e.target.value.toUpperCase()
    }, () => console.log(this.state.term))
  }

  handleAddItem = () => {
    if (this.state.term && !this.state.items.includes(this.state.term)) {
      const items = [...this.state.items, this.state.term];
      this.setState({
        items
      })
    } else if (this.state.items.includes(this.state.term)) {
      alert('You already have that item in your list!')
    } else {
      alert('Please enter an item')
    }
  }

  handleDeleteItem = (item) => {
    const items = this.state.items.filter(i => i !== item)
    this.setState({
      items
    })
  }

  handleEditItem = (item) => {
    this.setState({
      hidden: !this.state.hidden,
      itemToEdit: item
    }, () => console.log(this.state.itemToEdit))
  }

  handleCancelEdit = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  onEditChange = (e) => {
    this.setState({
      edittedItem: e.target.value.toUpperCase()
    }, () => console.log(this.state.edittedItem))
  }

  submitEdit = () => {
    if (this.state.edittedItem) {
      let items = this.state.items.filter(i => i !== this.state.itemToEdit)
      items = [...items, this.state.edittedItem]
      this.setState({
        items
      })
    }
  }

  alphabetizeItems = () => {
    const items = this.state.items.sort()
    this.setState({
      items
    })
  }

  render() {
    const { items, hidden, itemToEdit, itemToAdd } = this.state
    return (
      <div>
        <button className='ui secondary button' onClick={this.alphabetizeItems}>ALPHABETIZE</button>
        <AddForm
          handleFormChange={this.handleFormChange}
          handleAddItem={this.handleAddItem}
          itemToAdd={itemToAdd}
        />
        <EditForm
          items={items}
          hidden={hidden}
          itemToEdit={itemToEdit}
          onEditChange={this.onEditChange}
          submitEdit={this.submitEdit}
        />
        {items.map(item =>
          <Item
            hidden={hidden}
            key={uuid.v4()}
            item={item}
            handleDeleteItem={this.handleDeleteItem}
            handleEditItem={this.handleEditItem}
            handleCancelEdit={this.handleCancelEdit}
          />
        )}
      </div>
    )
  }
}
