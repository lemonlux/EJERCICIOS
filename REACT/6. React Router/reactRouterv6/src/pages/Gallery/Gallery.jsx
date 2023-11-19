import './Gallery.css'
import { getAll } from '../../services/ac.services'
import { Card } from '../../components'

export const Gallery = () => {
  const data = getAll()
  
  return (
    <>
    <h1>hola</h1>
    <section>
      {data.map((item)=>( // <Card propsDeLaCard = {item.deLaData}
        <Card name={item.name} image_url={item.image_url} species={item.species} personality={item.personality} gender={item.gender} id={item.id} title_color={item.title_color} key={JSON.stringify(item)}/>
      ))}
    </section>
    </>
  )
}
