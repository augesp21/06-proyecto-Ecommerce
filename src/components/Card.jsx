import './Card.css'

const Card = ({item}) => {
  return (
    <div className='card bg-dark col animate__animated animate__pulse' style={{border: '2px solid black', margin: '10px'}}>
    <div className="overflow">
     <img className='card-img-top' src={item.image} alt="img-costummer" />
    </div>
    <div className='card-body text-light'>
     <h4 className='card-title text-center'>{item.product_name}</h4>
     <p className='card-text'>${item.price}</p>
    <a href="#!" className="btn btn-outline-secondary rounded-0">
      Comprar ya!
    </a>
   </div>
 </div>
  )
}

export default Card