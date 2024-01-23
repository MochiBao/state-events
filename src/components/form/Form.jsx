import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import s from './form.module.css'


export const Form = ({plusContact}) => { 

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const onChange = (e) => {
      const {name, value} = e.target;
      if (name === "phone") {
        setPhone(value)
      } else {
        setName(value)
      }
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const contact = {name, phone, id: uuidv4()};
        plusContact(contact);
        
        
    }
 
    
    return (
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.form_label}>
          <span>Name</span>
          <input className={s.form_input}
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </label>
        <br />
        <label className={s.form_label}>
          <span>Phone</span>
          <input className={s.form_input}
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </label>
        <br />
        <button className={s.form_button}type="submit">addContact</button>
      </form>
    );
  
}



export default Form;