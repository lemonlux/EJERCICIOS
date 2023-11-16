import './App.css'
import { CV } from './CV/CV'
import { useState } from 'react'
import { Person, About, Experience, Education, More, Toggle, Skills, ToggleTwo } from './components/index'

const App =()=> {

  const { person, education, experience, languages, hardSkills, softSkills } = CV

  return (
    <>
      <Person person={person}/>
      <Toggle education={education} experience={experience}/>
      <ToggleTwo hardSkills={hardSkills} softSkills={softSkills}/>
    </>
  )
}

export default App
