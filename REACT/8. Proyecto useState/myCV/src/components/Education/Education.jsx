import './Education.css'


export const Education = ({ education }) => {
  return (
    <div className='education-card card'>
      {education.map((item)=>{
        return (
          <div key={item.id}>
            <h3 className='education title education-title'>🎓 {item.name}</h3>
            <h3 className='education where'>📍 {item.where}</h3>
            <h3 className='education'>{item.date}</h3>
            <h4 className='education'>{item.description}</h4>
          </div>
        )
      })}
    </div>
  )
}
