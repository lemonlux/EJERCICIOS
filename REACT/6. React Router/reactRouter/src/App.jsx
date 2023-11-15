import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header, Nav, Title } from './components/index'

const App = () => {
  console.log('entro')
  return (
    <>
      <Header>
        <Title/>
        <Nav/>
      </Header>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
