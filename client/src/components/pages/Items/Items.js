import React from "react";
import chocolate_cherryCake from "./item_photos/chocolate_cherryCake.jpg";
import '../Items/item.css';


const Items = () => {
  return (
    <div className='container-fluid'>
      <h1>Cakes</h1>
      <img src={chocolate_cherryCake} alt="chocolate cake" style={{ width: 400, borderRadius: 50 }} />
      <p className="itemTitle">Decadent Chocolate Cake</p>
      <p className="price">$19.99</p>
      <p>Some text about the cake..</p>
      <p><button>Add to Cart</button></p>
    </div>
  )
};

export default Items;