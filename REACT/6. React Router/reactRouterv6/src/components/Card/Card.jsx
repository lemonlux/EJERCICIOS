import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ name, image_url, species, personality, gender, id, title_color}) => {
const path = `/gallery/villager/${id}`
const color = title_color ? ('#' + title_color) : '#ffffff'


  return (
    <div className='card' id={id} style={{'borderColor': color}}>
        <figure>
            <img src={image_url} alt={name}/>
        </figure>
        <Link to={path}>
        <h2>{name}</h2>
        </Link>
        <div className='info'>
            <h3>{gender}</h3>
            <h3>{species}</h3>
            <h3>{personality}</h3>
        </div>
    </div>
  )
}

