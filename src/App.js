import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person = {
    name: 'Md.Asif Ur Rahman',
    job: 'A front end web developer'
  }
  var style = {
    color: 'red',
    backgroundColor : "cyan",
    padding: '20px',
    borderRadius : '5px'
  }

  const nayoks = ["jafor", 'saddad', 'jashim', 'razzak'];
  const products = [
    {name: 'photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$79.99'},
    {name: 'Pdf Reader', price: '$69.99'}
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <h1>My heading</h1> */}
        <h2 style = {style}> {person.name}</h2>
        <h2 style = {{backgroundColor : "red", padding:'10px', borderRadius: '5px'}}> {person.job}</h2>
       <p>My first React app</p>
       <Person></Person>
       <Person></Person>
       <Person></Person>

       <Nayoknayika nayok = "razzak" nayika = "janina1"></Nayoknayika>
       <Nayoknayika nayok = "bapparaj" nayika = "chekakhor"></Nayoknayika>
       <Nayoknayika nayok = {nayoks[0]} nayika = "janina1"></Nayoknayika>
       <Nayoknayika nayok = "razzak" nayika = "janina1"></Nayoknayika>


       <Product product = {products[0]}></Product>
       <Product product = {products[1]}></Product>
       <Product product = {products[2]}></Product>

       <ul>
         {
           products.map(product => <li>{product.name}</li>)
         }
          {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
       </ul>

       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
       </ul>

       <Counter></Counter>
       <Users></Users>
      </header>
    </div>
  );
}

//Declaring a compononent name person
function Person() {
  const personStyle = {
    border: '2px solid cyan',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px'
  }
  return (
    <div style = {personStyle}>
      <h1>Name: Sakib Ur Rahman</h1>
    </div>
  )
}


//Declaring a compononent name Nayoknayika
function Nayoknayika(props) {
  console.log(props);
  const NayoknayikaStyle = {
    border: '2px solid red',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px'
  }
  return (
    <div style = {NayoknayikaStyle}>
      <h1>Nayok: {props.nayok} </h1>
      <h1>Nayika: {props.nayika} </h1>
    </div>
  )
}

//Products componnent

function Product(props) {
  console.log("Product props");
  console.log(props);
  console.log("Product propsssss");
  console.log(props.product);
  const ProductStyle = {
    border: '2px solid blue',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px',
    width: '300px',
    height: '300px',
    float :'left',
    backgroundColor: 'dimgray'
  }
  const {name, price} = props.product;
  return (
    <div style = {ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10)
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onMouseMove = {() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove = {() => setCount(count - 10)}>Decrease At rate 10 prime</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>{
    setUsers(data);
    
  });
  }, [])

  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
export default App;
