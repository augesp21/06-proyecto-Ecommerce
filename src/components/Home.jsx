import { Routes, Route } from 'react-router-dom'
import NavBar from '../Layouts/NavBar'
import Cards from './Cards'


const Home = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Cards />} />
          
      </Routes>
    </>

  )
}

export default Home