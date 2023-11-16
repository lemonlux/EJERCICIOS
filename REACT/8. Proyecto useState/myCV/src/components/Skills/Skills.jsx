import './Skills.css'



export const Skills = ({ skills }) => {
  return (
    <div className='skills-card card'>
        {skills.map((item)=>{
            return (
                <h3 key={JSON.stringify(item)}>{item}</h3>
            )
        })}
    </div>
  )
}

