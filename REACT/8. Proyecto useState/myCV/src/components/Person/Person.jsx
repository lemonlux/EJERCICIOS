import './Person.css'


export const Person = ({ person }) => {
  return (
    <div className='person-card card'>
      <figure>
        <img className='person-image' src={person.image} alt={person.name}/>
      </figure>
      <h3 className='name title'>{person.name} {person.surname}</h3>
      <h3>📆 {person.birthDate}</h3>
      <h3>🌍 {person.city}</h3>
      <h3><a href={'mailto:' + person.email}>💌 {person.email}</a></h3>
      <h3><a href={person.gitHub}>💾 github.com/lemonlux/</a></h3>
    </div>
  )
}

