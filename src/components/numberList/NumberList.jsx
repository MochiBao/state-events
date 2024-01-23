import NumberListItem from "./numberListItem/NumberListItem"
import React from 'react'
import  s from './numberList.module.css'

const NumberList = ({data, deletePhone}) => {
  // componentDidUpdate() {
  //   console.log("NumberList оновився");
  //   // Новий елемент додати в local Storage
  // }

  return (
    <ul className={s.number_list}>
        {data.map(({id, name, phone}) => {
            return <NumberListItem 
            key={id} 
            id={id} 
            name={name} 
            phone={phone}
            deletePhone={deletePhone}
            />
        })}
    </ul>
  ) }


    

export default NumberList;