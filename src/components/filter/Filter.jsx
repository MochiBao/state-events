import React from 'react'
import s from './filter.module.css'

const Filter = ({ filter, plusFilter }) => {
  return (
    <div className={s.filter_container}>
    <label className={s.filter_label}>
          <span>Filter by name</span>
          <input className={s.filter_input}
            type="text"
            name="name"
            value={filter}
            onChange={plusFilter}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </label>
    </div>
  )
}

export default Filter