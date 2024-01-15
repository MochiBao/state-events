import React from 'react'

const Filter = ({ plusFilter }) => {
  return (
    <label>
          <span>Filter by name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={plusFilter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </label>
  )
}

export default Filter