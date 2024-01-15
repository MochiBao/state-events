import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


class Form extends Component {
    state ={
        name: "",
        phone: "",
    };

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState( {
            [name]: value,
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        const contact = {...this.State, id: 5};
        this.props.plusContact(contact);
        
        
    }
  render() {
    const {name, phone} = this.state;
    const {onChange, onSubmit} = this;
    return (
        
      <form onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </label>
        <br />
        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </label>
        <br />
        <button type="submit">addContact</button>
      </form>
    );
  }
}



export default Form;