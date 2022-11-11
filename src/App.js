import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [itemMult, setItemMult] = useState([]);
  const [itemCount, setCount] = useState([]);



  function handleClick(item){
    console.log("Item Added to Cart")
    setPrice(price + item.item.price);
    setItemMult([...itemMult, item.item.name]);
    if(items.length == 0) {
      setItems([...items, item.item.name]);
    }
    for (let i = 0; i < items.length; i++) {
      if (item.item.name == items[i]) {
        break;
      }
      if (i+1 == items.length){
        setItems([...items, item.item.name]);
      }
    }


  };

  function NumberOf(name){
    var count = 0;
    for(let i = 0; i < itemMult.length; i++) {
      if(itemMult[i] == name){
        count = count + 1;
      }
    }
    return count;
  }



  return (
    <div className="App">
      <div class="menu">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components  
          <p class="menuItem"> 
          <div>{item.name} ${item.price} <button onClick={() => handleClick({item})}> Add to Cart </button> </div>
          <div class="description">{item.description}</div>
          </p> 
      ))}
      </div>
      <div class="cart">
        <h2>Cart </h2>
        <h3>Total = ${(Math.round(price * 100) / 100).toFixed(2)} </h3>

        <h4>{items.map((bakedGood) => 
        <p>{NumberOf(bakedGood)}x {bakedGood} </p>
        )}</h4>
      </div>
    </div>
  );
}

export default App;
