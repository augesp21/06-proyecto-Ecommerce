import { Routes, Route } from 'react-router-dom'
import Cards from '../../../ecommerce/src/components/Cards'
import NavBar from '../Layouts/NavBar'


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