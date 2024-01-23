import NumberList from "./components/numberList/NumberList";
import './App.css';
import Form from "./components/form/Form";
import Filter from "./components/filter/Filter";
import { useEffect, useState } from "react";
function App () {

  // state = {
  //   phones : [
  //   {id:1, name: "Anton", phone: "735-07-97"},
  //   {id:2, name: "Anton2", phone: "735-06-97"},
  //   {id:3, name: "Seriy", phone: "735-05-97"},
  //   {id:4, name: "Seriy2", phone: "735-04-97"}, 
  //   ],  

  //   filter: "",
  //   error: false,
  // };

  const phoness = [
      {id:1, name: "Anton", phone: "735-07-97"},
      {id:2, name: "Anton2", phone: "735-06-97"},
      {id:3, name: "Seriy", phone: "735-05-97"},
      {id:4, name: "Seriy2", phone: "735-04-97"}, 
    ];

  const storageData = localStorage.getItem("phones")
  const parsedStorageData = JSON.parse(storageData);


  const [phones, setPhones] = useState(() => parsedStorageData || phoness)
  const [filter, setFilter] = useState("")
  const [error, setError] = useState(false)


 

  // shouldComponentUpdate(nextProps, nextState ) {
  //   // Спрацьовує  перед методом рендер і вказує чи має 
  //   // рендеритись компонент, якщо повертається false 
  //   // рендер не відбувається
  //   if (nextState.phones === this.state.phones) {
  //     return false;
  //   }
  //   return true;
  // };


  useEffect(() => {
    try {
      localStorage.setItem("phones", JSON.stringify(phones))
    } catch (error) {
      setError(`${error.message}`)
    }
      
  }, [phones])
 

  // componentDidCatch() {
  //   this.setState({error: true});
  // }

  const plusContact = (contact) => {
    if (phones.find((phone) => contact.name.toLowerCase() === phone.name.toLowerCase())) {
      alert("Такий контакт вже є")
    } else {
      setPhones(prev => [...prev, contact]);
  }};

  const plusFilter = (e) => {
    const {value} = e.target;
    setFilter(value)
  };

  const filterByName = () => {
    const filterPhones = phones.filter((phone) => {
      return phone.name.toLowerCase().includes(filter.toLowerCase()); 
      // return phone.filter((phone) => {
      //   return phone.name.toLowerCase().includes(filter.toLowerCase); 
      // })
    });
   
    return filterPhones;

  }
  

  const deletePhone = (id) => {
    setPhones(prev => prev.filter((item) => item.id !== id));
    };

    const filterElements = filterByName();

   
   return (
    <div className="main">
    {error && <h1>Вибачте, сайт впав</h1>}
    <Form plusContact={plusContact}/>
    <Filter filter={filter} plusFilter={plusFilter} />
    <NumberList data={filterElements} deletePhone={deletePhone}/>
    </div>
   )
  };
  
export default App;







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