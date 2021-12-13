import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Sidebar from './Sidebar';
import ProductsList from './ProductsList';

export default function Homepage({setUserFilters, tempData, cartData, setCartData}) {
    return (
        <>
        <Row>
            <Col md={3} className='p-3'>
                <Sidebar setUserFilters={setUserFilters} />
            </Col>
            <Col md={9} className='p-3'>
                <ProductsList data={tempData} cartData={cartData} setCartData={setCartData} />
            </Col>
        </Row>
        </>
    )
}
