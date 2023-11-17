import { Header, Footer } from './components/index'
import './App.css'
import { Outlet } from 'react-router-dom'

const App= () =>{


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
