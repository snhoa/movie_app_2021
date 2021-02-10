import React from 'react';
import PropTypes from "prop-types";

const foodIlike = [
  {
    id:1,
    name:"kimchi",
    image:"https://japan.recipetineats.com/wp-content/uploads/2018/07/Kimchi_0149.jpg",
    rating: 4.8
  },
  {
    id:2,
    name:"hambuger",
    image:"http://www.burgerweb.com/wp-content/uploads/2015/10/burgerburgerburger.jpg",
    rating:4.5
  },
  {
    id:3,
    name:"pizza",
    image:"https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/alpine_pizza_32132_16x9.jpg",
    rating:4.9
  }
]

function Food({ name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name}/>

    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (<div>
    <h1>Hello</h1>
    {foodIlike.map(dish => (
    <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
