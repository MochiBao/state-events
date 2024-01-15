import React, { Component } from "react";
import s from "./numberListItem.module.css"

class NumberlistItem extends Component {
  componentWillUnmount() {
    console.log("Видалили контакт");
    // Потрібен для зупинки таймерів, знаяття, слухача події, 
    // HTTP-запити
  }
  render () {
  return (
    <li>
      <p>{this.props.name}</p>
      <p>{this.props.number}</p>
      <button type="button" onClick={(e) => deletePhone(id)}>
        Видалити
      </button>
    </li>
  );
  }
};

export default NumberlistItem;