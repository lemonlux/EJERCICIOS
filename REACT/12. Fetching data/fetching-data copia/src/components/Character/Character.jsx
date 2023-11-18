import './Character.css'

export const Character = ({ title, original_title, image, director, release_date, rt_score, running_time }) => {
  return (
    <div className='character'>
        <figure>
            <img className='img' src={image} alt={title}/>
        </figure>
        <h2 className='title'>{title}</h2>
        <h2 className='original-title'>{original_title}</h2>
        <div className='info-div'>
            <h3>{director}</h3>
            <h3>{running_time}min</h3>
            <h3>Released in {release_date}</h3>
            <h3>Rating: {rt_score}</h3>
        </div>
    </div>
  )
}

