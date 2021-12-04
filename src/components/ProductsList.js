import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({data}) {
    const [selectedSort, setSelectedSort] = useState('')
    const [tempData, setTempData] = useState(data)

    useEffect(() => {
        setTempData(data)
        setSelectedSort('')
    }, [data])

    useEffect(() => {
        let temp = [...data]
        if (selectedSort === 'l-h'){
            setTempData(temp.sort((a,b) => {
                return a.price - b.price
            }))
        } else if (selectedSort === 'h-l'){
            setTempData(temp.sort((a,b) => {
                return b.price - a.price
            }))
        }
    }, [selectedSort])
    return (
        <div>
            <div className='my-2 d-flex align-items-center'>
                <h6 className='my-0 mx-2'>Sort By: </h6>
                <button className={`btn ${selectedSort === 'l-h' ? 'btn-primary' : ''} mx-2`}
                    onClick={() => setSelectedSort('l-h')}> Price - Low to High </button>
                <button className={`btn ${selectedSort === 'h-l' ? 'btn-primary' : ''} mx-2`}
                    onClick={() => setSelectedSort('h-l')}> Price - High to Low </button>
            </div>
            <div className='d-flex flex-wrap mt-4'>
                {tempData.map(each => (
                    <ProductCard data={each} key={each.id} />
                ))}
            </div>
        </div>
    )
}