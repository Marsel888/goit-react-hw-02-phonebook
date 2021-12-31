import React from 'react'
import { InputRe, Button, Form } from '../style.styled'

class ContackForm extends React.Component {
  state = {
    name: '',
    number: '',
  }

  inputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  hendlerSubmit = (e) => {
    this.setState({ name: '', number: '' })
    e.preventDefault()
    this.props.submitForm(this.state)
  }

  render() {
    return (
      <Form action="" onSubmit={this.hendlerSubmit}>
        <label>
          Имя
          <InputRe
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Имя"
          />
        </label>
        <label>
          <InputRe
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="телефон"
            required
          />
        </label>

        <Button type="submit">Поиск</Button>
      </Form>
    )
  }
}

export default ContackForm
