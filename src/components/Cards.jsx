import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

const Cards = () => {
  const [items, setItems] = useState([])

  const getItems = async() => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    console.log(res);
    setItems(res.data.slice(0, 20))
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='d-flex flex-wrap justify-content-evenly'>
      {items.map((item) => (
        <div className='row col-md-3'>
          <Card item={item} />
        </div>
      ))}
    </div>
  )
}

export default Cards