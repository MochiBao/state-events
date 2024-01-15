import React, { Component } from "react";
// import Buttons from "./components/buttons/Buttons";
// import Statistics from "./components/statistics/Statistics";
// import Notification from './components/notification/Notification';
import NumberList from "./components/numberList/NumberList";
import Form from "./components/form/Form";
import Filter from "./components/filter/Filter";
export default class App extends Component {

  state = {
    phones : [
    {id:1, name: "Anton", phone: "735-07-97"},
    {id:2, name: "Gandon", phone: "735-06-97"},
    {id:3, name: "Pituh", phone: "735-05-97"},
    {id:4, name: "Seriy", phone: "735-04-97"}, 
    ],  

    filter: "",
    error: false,
  };

  componentDidMount () {
    // HTTP req, event
    const storageData = localStorage.getItem("phones")
    const parsedStorageData = JSON.parse.storageData
    console.log(parsedStorageData);

    //Обов'язково записувати умову, щоб не зациклити дію
    if (parsedStorageData) {
      this.setState({
        phones:parsedStorageData
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState ) {
    // Спрацьовує  перед методом рендер і вказує чи має 
    // рендеритись компонент, якщо повертається false 
    // рендер не відбувається
    if (nextState.phones === this.state.phones) {
      return false;
    }
    return true;
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.phones !== prevState.phones) {
        localStorage.setItem("phones", JSON.stringify(this.state.phones))

    }
    
  };

  componentDidCatch() {
    //слугує для 
    this.setState({error: true});
  }

  plusContact = (contact) => {
    if (this.state.phones .find((phone) => phone.name.toLowerCase() === phone.name.toLowerCase())) {
      alert("Такий контакт вже є")
    } else {
      this.setState( prev => ({
        phones: [...prev.phones, contact]}))
    }
  }

  plusFilter = (e) => {
    const {value} = e.target;
    this.setState({filter: value})
  };

  filterByName = () => {
    const {phones, filter } = this.state;
    const filterPhones = phones.filter((phone) => {
      phones.filter((phone) => {
        return phone.name.toLowerCase().includes(filter.toLowerCase); 
      })
    });
    return filterPhones;

  }

  deletePhone = (id) => {
    this.setState(prevState => ({
      phones: prevState.phones.filter((item) => item.id /= id)
    }));

    }
    // this.setState((prev) => {
    //   prev.phones.filter((item) => {
    //     return item.id /= id
    //   })
    // })
  
  render() {
    if (this.state.error === true) {
      <h1>Вибачте, сайт впав</h1>
      
    }

    // const {phones} = this.state;
    const {plusContact, plusFilter} = this
    const filterElements = this.filterByName()

   return (
    <>
    <Form plusContact={plusContact}></Form>
    <Filter plusFilter={plusFilter}/>
    <NumberList data={filterElements} deletePhone={this.deletePhone}/>
    </>
   )
  }}
  

//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const buttonNames = ["good", "neutral", "bad"]

//   const onClick = e => {
//     const {name} = e.target;
//     switch (name) {
//       case "good":
//         setGood((prev) => {return prev + 1})
//         break;
//         case "neutral":
//         setNeutral((prev) => {return prev + 1})
//         break;
//         case "bad":
//         setBad((prev) => {return prev + 1})
//         break;
    
//       default: return
        
//     }
//   };

//   totalFeedback = () => {
//     return good + neutral + bad;
//   };

//   positiveFeedback = () => {
//     const total = totalFeedback();
//     return Math.round((good * 100) / total)
//   }

//   render() {;
//     const {good, neutral, bad} = state;
//     const buttonNames = Object.keys(state);
//     const total = totalFeedback();
//     const positive = positiveFeedback();

//     return (
//       <>
//         <div>Leave you feedback</div>
//         <Buttons data={buttonNames} onClick={onClick} />

//         {total > 0  ?   (
//           <>
//         <div>Statistics</div>
//         <Statistics good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positive={positive}
//         />
//         </>
//         ) : (<Notification message="no feedback"/>)}

//       </>
//     );
//   }
// }