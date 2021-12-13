import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from './components/Sidebar';
import ProductsList from './components/ProductsList';
import ReactTooltip from 'react-tooltip';
import data from './data/productsData.json'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CartPage from './components/CartPage';
import Homepage from './components/Homepage';

function App() {
  const [tempData, setTempData] = useState(data)
  const [globalData, setGlobalData] = useState(data)
  const [userFilters, setUserFilters] = useState({
    categories: [], size: [], subCategory: [] 
  })
  const [cartData, setCartData] = useState([])


  useEffect(() => {
    let data = [...globalData]
    let result = []
    data.forEach(each => {
      if (userFilters?.categories?.length === 0 && userFilters?.subCategory?.length === 0 &&
          userFilters?.size?.length === 0){
        result.push(each)
      }
      else if (userFilters?.categories?.length === 0 && userFilters?.subCategory?.length === 0 &&
        userFilters?.size.filter(value => each.size.includes(value)).length > 0){
          result.push(each)
        }
      else if (userFilters?.categories?.includes(each.category) && userFilters?.subCategory?.length === 0 &&
        userFilters?.size?.length === 0){
          result.push(each)
        }
      else if (userFilters?.categories?.length === 0 && userFilters?.subCategory?.includes(each.subCategory) &&
        userFilters?.size?.length === 0){
          result.push(each)
      }
      else if (userFilters?.categories?.length === 0 && userFilters?.subCategory?.includes(each.subCategory) &&
        userFilters?.size.filter(value => each.size.includes(value)).length > 0){
          result.push(each)
      }
      else if (userFilters?.categories?.includes(each.category) && userFilters?.subCategory?.includes(each.subCategory) &&
        userFilters?.size?.length === 0){
          result.push(each)
        }
      else if (userFilters?.categories?.includes(each.category) && userFilters?.subCategory?.length === 0 &&
      userFilters?.size.filter(value => each.size.includes(value)).length > 0){
        result.push(each)
        }
      else if (userFilters?.subCategory?.includes(each.subCategory) && 
              userFilters?.categories?.includes(each.category) &&
              userFilters?.size.filter(value => each.size.includes(value)).length > 0){
        result.push(each)
      }
    })
    setTempData(result)
  }, [userFilters])

  return (
    <Container fluid className='p-0'>
      
      <Router>
      <Header count={cartData} />
        <Routes>
          <Route path='/cart' exact element={<CartPage cartData={cartData} setCartData={setCartData} />} />
          <Route path='/' exact element={<Homepage setUserFilters={setUserFilters} tempData={tempData} 
              cartData={cartData} setCartData={setCartData} />} />
        </Routes>
      </Router>
      <ReactTooltip />
    </Container>
  );
}

export default App;
