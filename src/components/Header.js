import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({count}) {
    return (
        <div className='bg-primary' style={{width: '100%', padding: '14px 20px'}}>
            <div className='d-flex justify-content-around align-items-center'>
                <Link to="/" className='text-white fw-bold' style={{textDecoration: 'none', fontSize: 26}}>Flipkart</Link>
            
                <form>
                    <input className='form-control' type='search' placeholder='Search for products, brands and more ..' 
                        style={{width: 450}} />
                </form>

                <div className='d-flex'>
                    <h5 className='text-white my-0 mx-3'>John Doe</h5>
                    <h5 className='text-white my-0 mx-3'>More</h5>
                </div>

                <div className='position-relative'>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {count.length}
                        <span className="visually-hidden">{count.length} items in cart</span>
                    </span>
                    
                    <Link to='/cart' className='text-white' style={{textDecoration: "none"}}>
                        <h5 className='text-white my-0'> Cart </h5>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}
