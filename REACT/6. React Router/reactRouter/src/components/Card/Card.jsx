import './Card.css'


export const Card = ({ id, name, description }) => {
  return (
    <div>
        <h2>{id}</h2>
        <h3>{name}</h3>
        <h3>{description}</h3>
    </div>
  )
}

