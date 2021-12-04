import React from 'react'
import { Badge, Card } from 'reactstrap'

export default function ProductCard({data}) {
    return (
        <Card className='p-3 me-4 mb-4 my-card' style={{width: 260}}>
            <img src={data.image} style={{width: '100%'}} />
            <h6 className='text-muted text-capitalize my-2'>
                {data.brand}
            </h6>
            <p data-tip={data.name} className='my-1'>
                {data.name.length > 20 ? `${data.name.substring(0,20)}...` : data.name}
            </p>
            {data.assured && <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
                style={{height: 20, width: 70}} className='mt-1 mb-2' />}
            <h5 className='my-0 p-0'>
                ₹{data.price}
            </h5>
            <div className='mt-2 mb-0'>
                {data.size.map(each => (
                    <Badge key={each} className='mx-1'>{each}</Badge>
                ))}
            </div>
        </Card>
    )
}
