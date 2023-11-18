import './Character.css'

export const Character = ({ name, img, species, status, occupation }) => {
  return (
    <div className='character'>
        <figure>
            <img src={img} alt={name}/>
        </figure>
        <h2>{name}</h2>
        <div className='info-div'>
            <h3>{species}</h3>
            <h3>{status}</h3>
            <h3>{occupation}</h3>
        </div>
    </div>
  )
}

