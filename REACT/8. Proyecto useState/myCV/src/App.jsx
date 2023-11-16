import './App.css'
import { CV } from './CV/CV'
import { useState } from 'react'
import { Person, About, Experience, Education, More, Toggle } from './components/index'

const App =()=> {

  const { person, education, experience, languages, hardSkills, softSkills } = CV

  return (
    <>
      <Person person={person}/>
      <Toggle education={education} experience={experience}/>
    </>
  )
}

export default App
