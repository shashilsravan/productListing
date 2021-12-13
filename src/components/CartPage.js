import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'

export default function CartPage({cartData, setCartData}) {
    const [totalPrice, setTotalPrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [tempCartData, setTempCartData] = useState(cartData)
    const [tempSaveForLater, setTempSaveForLater] = useState(cartData.filter(x => x.saveForLater))

    useEffect(() => {
        let resTotal = 0
        let resPrice = 0
        tempCartData.forEach(each => {
            resTotal += (each.count * each.actualPrice)
            resPrice += (each.count * each.price)
        })
        setTotalPrice(resTotal)
        setPrice(resPrice)
    }, [tempCartData])

    useEffect(() => {
        let resArr1 = []
        let resArr2 = []
        cartData.forEach(each => {
            if (each.saveForLater){
                resArr1.push(each)
            }
            else{
                resArr2.push(each)
            }
        })
        console.log(`resArr1, resArr2`, resArr1, resArr2)
        setTempCartData(resArr2)
        setTempSaveForLater(resArr1)
    }, [cartData])

    const increaseQuantity = (id) => {
        let tempArr = []
        tempCartData.forEach(element => {
            if (element.id == id){
                tempArr.push({...element, count: element.count + 1})
            }
            else{
                tempArr.push(element)
            }
        });
        setTempCartData(tempArr)
    }

    const decreaseQuantity = (id) => {
        let tempArr = []
        tempCartData.forEach(element => {
            if (element.id == id){
                tempArr.push({...element, count: element.count - 1})
            }
            else{
                tempArr.push(element)
            }
        });
        setTempCartData(tempArr)
    }

    const removeElement = (id) => {
        let tempArr = []
        cartData.forEach(element => {
            if (element.id !== id){
                tempArr.push(element)
            }
        });
        setCartData(cartData)
        setTempCartData(tempArr)
    }

    const saveForLater = (id) => {
        let tempArr = []
        cartData.forEach(element => {
            if (element.id == id){
                tempArr.push({...element, saveForLater: true})
            }
            else{
                tempArr.push(element)
            }
        });
        
        setCartData(tempArr)
    }

    const MoveToCart = (id) => {
        let tempArr = []
        cartData.forEach(element => {
            if (element.id == id){
                tempArr.push({...element, saveForLater: false})
            }
            else{
                tempArr.push(element)
            }
        });
        setCartData(tempArr)
    }

    return (
        <Container className='mt-5'>
            <Row>
                <Col md={8}>
                    <Card>
                        <CardHeader>
                            My Cart ({tempCartData.length})
                        </CardHeader>
                        <CardBody>
                            { tempCartData.length === 0 ?
                                <>
                                    <Alert color='info'>
                                        Your cart is empty! Add items to it now.
                                    </Alert>
                                    <Link to='/' className='btn btn-primary'>Shop Now </Link>
                                </>
                            : tempCartData.map(element => (
                                <div key={element.id} style={{height: 180}} className='mb-4'>
                                    <Row>
                                        <Col md={2}>
                                            <img className="img-thumbnail" src={element.image} style={{height: 130}} />
                                        </Col>
                                        <Col md={10}>
                                            <h5>{element.name}</h5>
                                            <p className='text-muted my-0'>{element.brand}</p>
                                            {element.assured && <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
                                                style={{height: 20, width: 70}} className='' />}
                                            <div className='d-flex align-items-center'>
                                                <h4 className='me-2'>₹{element.count * element.price}</h4>
                                                <p className='mt-2 text-muted' style={{textDecoration: "line-through"}}>₹{element.count * element.actualPrice}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className='d-flex align-items-center'>
                                            <div className='mt-2'>
                                                <button className='btn btn-light' disabled={element.count < 2}
                                                    onClick={() => decreaseQuantity(element.id)}> - </button>
                                                <button className='btn' disabled> {element.count} </button>
                                                <button className='btn btn-light' onClick={() => increaseQuantity(element.id)}> + </button>
                                            </div>
                                            <div className='ms-3'>
                                                <button className='btn mt-2 fw-bold'
                                                    onClick={() => saveForLater(element.id)}>Save for Later</button>
                                            </div>
                                            <div className='ms-3'>
                                                <button className='btn mt-2 fw-bold'
                                                    onClick={() => removeElement(element.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            ))}
                        </CardBody>
                    </Card>

                    { tempSaveForLater.length > 0 &&
                    <Card className='mt-5'>
                        <CardHeader>
                            Save For Later ({tempSaveForLater.length})
                        </CardHeader>
                        <CardBody>
                            { tempSaveForLater.map(element => (
                                <div key={element.id} style={{height: 180}}>
                                    <Row>
                                        <Col md={2}>
                                            <img className="img-thumbnail" src={element.image} style={{height: 130}} />
                                        </Col>
                                        <Col md={10}>
                                            <h5>{element.name}</h5>
                                            <p className='text-muted my-0'>{element.brand}</p>
                                            {element.assured && <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
                                                style={{height: 20, width: 70}} className='' />}
                                            <div className='d-flex align-items-center'>
                                                <h4 className='me-2'>₹{element.count * element.price}</h4>
                                                <p className='mt-2 text-muted' style={{textDecoration: "line-through"}}>₹{element.count * element.actualPrice}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className='d-flex align-items-center'>
                                            <div className='mt-2'>
                                                <button className='btn btn-light' disabled={element.count < 2}
                                                    onClick={() => decreaseQuantity(element.id)} disabled> - </button>
                                                <button className='btn' disabled> {element.count} </button>
                                                <button className='btn btn-light' onClick={() => increaseQuantity(element.id)} disabled> + </button>
                                            </div>
                                            <div className='ms-3'>
                                                <button className='btn mt-2 fw-bold'
                                                    onClick={() => MoveToCart(element.id)}>Move to cart</button>
                                            </div>
                                            <div className='ms-3'>
                                                <button className='btn mt-2 fw-bold'
                                                    onClick={() => removeElement(element.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            ))}
                        </CardBody>
                    </Card>}
                </Col>
                <Col md={4}>
                    {tempCartData.length > 0 && <Card>
                        <CardHeader className='text-muted'>
                            PRICE DETAILS
                        </CardHeader>
                        <CardBody>
                            <Row className="my-3">
                                <Col md={5}>Price ({tempCartData.length} {tempCartData.length > 1 ? 'items' : 'item'})</Col>
                                <Col md={4}></Col>
                                <Col md={3}>
                                    ₹{totalPrice}
                                </Col>
                            </Row>

                            <Row className="my-3">
                                <Col md={5}>Discount</Col>
                                <Col md={4}></Col>
                                <Col md={3} className="text-success">
                                    - ₹{totalPrice - price}
                                </Col>
                            </Row>

                            <Row className="my-3">
                                <Col md={5}>Delivery Charges</Col>
                                <Col md={4}></Col>
                                <Col md={3} className="text-success">
                                    FREE
                                </Col>
                            </Row>

                            <Row className="my-3">
                                <Col md={5} className='fw-bold'>Total Amount</Col>
                                <Col md={4}></Col>
                                <Col md={3} className='fw-bold'>
                                    ₹{price}
                                </Col>
                            </Row>

                            <h6 className='text-success'>
                                You will save ₹{totalPrice - price} on this order
                            </h6>
                        </CardBody>
                    </Card>}
                </Col>
            </Row>
        </Container>
    )
}
