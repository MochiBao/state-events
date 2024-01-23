import s from './numberListItem.module.css'
const NumberlistItem = ({id, name, phone, deletePhone}) => {
  // componentWillUnmount() {
  //   console.log("Видалили контакт");
  //   // Потрібен для зупинки таймерів, знаяття, слухача події, 
  //   // HTTP-запити
  // }
 
  return (
    <li className={s.number_list_item}>
      <p>{name}</p>
      <p>{phone}</p>
      <button className={s.button} type="button" onClick={(e) => deletePhone(id)}>
        Видалити
      </button>
    </li>
  );
};

export default NumberlistItem;