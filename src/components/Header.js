import React from 'react'

export default function Header() {
    return (
        <div className='bg-primary' style={{width: '100%', padding: '14px 20px'}}>
            <div className='d-flex justify-content-around align-items-center'>
                <a href="/" className='text-white fw-bold' style={{textDecoration: 'none', fontSize: 26}}>Flipkart</a>
            
                <form>
                    <input className='form-control' type='search' placeholder='Search for products, brands and more ..' 
                        style={{width: 450}} />
                </form>

                <div className='d-flex'>
                    <h5 className='text-white my-0 mx-3'>John Doe</h5>
                    <h5 className='text-white my-0 mx-3'>More</h5>
                </div>

                <h5 className='text-white my-0'>Cart</h5>
            </div>
            
        </div>
    )
}
