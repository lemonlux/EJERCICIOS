import './Gallery.css'
import { getAll } from '../../services/data.services'
import { Card } from '../../components/index'

export const Gallery = () => {
  const data = getAll()
  return (
    <div>{data.map(item =>(
      <Card name={item.name} id={item.id} description={item.description} key={item.id}/>
    ))
    }</div>
  )
}
