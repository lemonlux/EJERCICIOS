import './Experience.css'


export const Experience = ({ experience }) => {
  return (
    <div className='experience-card card'>
      {experience.map((item)=>{
        return(
          <div key={JSON.stringify(item)}>
             <h3 className='experience title experience-title'>👩🏻‍💻 {item.name}</h3>
            <h3 className='experience where'>📍 {item.where}</h3>
            <h3 className='experience'>{item.date}</h3>
            <h4 className='experience'>{item.description}</h4>
          </div>
        )
      })}
      
    </div>
  )
}
