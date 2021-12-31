import React from 'react'
import { Form } from './style.styled'
import { nanoid } from 'nanoid'

import ContackForm from './contactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'

class Input extends React.Component {
  state = {
    contacts: [],

    filter: '',
  }

  submitForm = ({ name, number }) => {
    if (this.test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }

    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          id: nanoid(),
          names: name,

          number: number,
        },
      ],
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  clickDelete = (e) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter((contact) => contact.id !== e),
    }))
  }

  test = (data) => {
    return this.state.contacts.some((item) => {
      return item.names.toLowerCase() === data
    })
  }

  render() {
    const visibal = this.state.contacts.filter((contact) => {
      return contact.names
        .toLowerCase()
        .includes(this.state.filter.toLowerCase())
    })

    return (
      <>
        <ContackForm submitForm={this.submitForm} />

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList visibal={visibal} click={this.clickDelete} />
      </>
    )
  }
}

export default Input
