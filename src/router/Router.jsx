import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Details from '../pages/Details'
import Home from '../pages/Home'


const Router = () => {
  return (
	<BrowserRouter>
	<Navbar/>
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/details/:name" element={<Details/>}/>
	</Routes>
	<Footer/>
	</BrowserRouter>
  )
}

export default Router