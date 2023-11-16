import './App.css'
import { CV } from './CV/CV'
import { useState } from 'react'
import { Person, About, Experience, Education, More } from './components/index'

const App =()=> {

  const { person, education, experience, languages, hardSkills, softSkills } = CV
const [showEducation, setShowEducation] = useState(true)
  return (
    <>
      <Person person={person}/>
      <button className='btn btn-education' id={showEducation ? 'active' : 'inactive'} onClick={() => setShowEducation(true)} >🎓 Education</button>
      <button className='btn btn-experience' id={showEducation ? 'inactive' : 'active'} onClick={() => setShowEducation(false)}>👩🏻‍💻 Experience</button>
      {/* <Education education={education}/>
      <Experience experience={experience}/> */}
      <div>
        {showEducation ? (<Education education={education}/>) : (<Experience experience={experience}/>) }
      </div>
    </>
  )
}

export default App
