import React, { useState } from "react"
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const { name, calories, image, servings } = props


    const deleteFood= (foodName) => {
        props.onDeleteData(foodName)
    }

    return (
        <Col>
            <Card
                title={name}
                style={{ width: 230, height: 300, margin: 10 }}
                key={Math.random()}
            >
                <img src={image} height={60} alt="food" />
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>
                    <b>Total Calories: {calories} * {servings} </b> kcal
                </p>
                <Button onClick= {()=> deleteFood(name)} type="primary"> Delete </Button>
            </Card>
        </Col>
    )
}

export default FoodBox;