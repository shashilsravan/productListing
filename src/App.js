import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';
import Sidebar from './components/Sidebar';
import ProductsList from './components/ProductsList';
import ReactTooltip from 'react-tooltip';
import data from './data/productsData.json'

function App() {
  const [tempData, setTempData] = useState(data)
  const [globalData, setGlobalData] = useState(data)
  const [userFilters, setUserFilters] = useState({
    categories: [], size: [], subCategory: [] 
  })
  // 0      0      1
  // 0      1      0
  // 0      1      1
  // 1      0      0
  // 1      0      1
  // 1      1      0
  // 1      1      1


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

  useEffect(() => {
    console.log(`tempData`, tempData)
  }, [tempData])

  return (
    <Container fluid className='p-0'>
      <Header />
      <Row>
        <Col md={3} className='p-3'>
            <Sidebar setUserFilters={setUserFilters} />
        </Col>
        <Col md={9} className='p-3'>
            <ProductsList data={tempData} />
        </Col>
      </Row>
      <ReactTooltip />
    </Container>
  );
}

export default App;
