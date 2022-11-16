import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, { useState } from "react"

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }
    const caloriesChangeHandler = (event) => {
        setCalories(event.target.value)
    }
    const servingsChangeHandler = (event) => {
        setServings(event.target.value)
    }

    const submitHandler = (event) => {
        console.log("click")
        event.preventDefault()
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
          }
        
        props.onFoodData(newFood)
        setName("")
        setImage("")
        setCalories("")
        setServings("")


    }
  
    return (
        <form onSubmit={submitHandler}>
            <div className="new-food">
                <label>Name</label>
                <Input type="text" value={name} onChange={nameChangeHandler}/>

                <label>Image</label>
                <Input type="text" value={image} onChange={imageChangeHandler}/>
         
                <label>Calories</label>
                <Input type='number' min='0' value={calories} onChange={caloriesChangeHandler} />
                
                <label>Servings</label>
                <Input type='number' min='0' step='1' value={servings} onChange={servingsChangeHandler} />

                <button type="submit">Add Food</button>

            </div>
        </form>
    )

}

export default AddFoodForm;