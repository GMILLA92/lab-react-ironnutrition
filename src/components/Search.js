import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, { useState } from "react"



function Search(props) {
    const [name, setName] = useState("")

    const titleChangeHandler = (event) => {

        setName(event.target.value)
        props.onSearchData(event.target.value)
    }

    return (
        <div>
            <label>Search bar</label>
            <input type="text" onChange={titleChangeHandler} />
        </div>
    )
}


export default Search;