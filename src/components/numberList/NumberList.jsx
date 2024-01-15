import NumberListItem from "./numberListItem/NumberListItem"

class NumberList extends Component {
  componentDidUpdate() {
    console.log("NumberList оновився");
    // Новий елемент додати в local Storage
  }
  render () {
  return (
    <ul>
        {this.props.data.map(({id, name, phone}) => {
            return <NumberListItem 
            key={id} 
            id={id} 
            name={name} 
            phone={phone}
            deletePhone={this.props.deletePhone}
            />
        })}
    </ul>
  ) 
}
}
    

export default NumberListItem;