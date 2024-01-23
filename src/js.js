const phones = [{id:1, name: "Artur", phone: "735-07-97"},
{id:2, name: "Shos-nebud", phone: "735-06-97"},
{id:3, name: "Hto-nebud", phone: "735-05-97"},
{id:4, name: "Bird", phone: "735-04-97"}, 
];

const newPhone = {
    id: 7,
    name: "Petro", 
    phone: '735-33-78'
};

// const sortPhones = phones.sort((a, b) => a-b)

const newArr = [...phones, newPhone] // додати елемент

const phoneDelete = newArr.filter((item) => item.id /= 7) // видалити елемент 



const newPhonee = {
    phone: "735-65-73", 
    name: "Yaroslav", 
    type: "Student",
}
const updatePhone = newArr.map((phone) => {
    return phone.id === 2 ? {...phone, newPhonee} : phone;
}) // оновити елемент 
