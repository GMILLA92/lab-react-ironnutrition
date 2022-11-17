import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import React, { useState } from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodsCurrent, setFood] = useState(foods)
  const [filterFoods, setFilterFoods] = useState(foods)
  const [showMessage, setMessage] = useState(false)

  const deleteHandler = (deleteDataName) => {
    const newArray = foodsCurrent.filter(food => {
      return food.name !== deleteDataName
    })
    if (newArray.length === 0){
      setMessage(true)
      setFood(newArray)
      setFilterFoods(newArray)
    } else{
      setFood(newArray)
      setFilterFoods(newArray)
    }
   

  }

  const foodContentArray = filterFoods.map((food) => (
    <FoodBox
      name= {food.name}
      calories= {food.calories}
      image= {food.image}
      date = {food.date}
      onDeleteData={deleteHandler}
     
    />
  ))

   const foodDataHandler = (foodData) => {
    
    setFood ((prevState) =>{
      
      return [...prevState, foodData]
    })

  }




  const searchHandler = (searchStringData) => {
    console.log(searchStringData)
    const rsearchStringData = foodsCurrent.filter((food) => {
      return food.name.toLowerCase().includes(searchStringData.toLowerCase())
    })
    
    setFilterFoods(rsearchStringData)
  }


  return (
    < div className="App" >
      {/* {foodsCurrent.map((food) => {
        return (
          <div>
            <p> {food.name}</p>
            <img src={food.image} width={200} />
          </div>
        )
      })} */}
      {/* <FoodBox food ={ 
        {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }
      } /> */}
    <AddFoodForm onFoodData = {foodDataHandler}  />
    <Search onSearchData={searchHandler}/>
    {foodContentArray}
    {showMessage ? <h1>No elements! </h1> : ''}
    </div>

  );
}

export default App;
