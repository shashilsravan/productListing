import React, {useState, useEffect} from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Sidebar({setUserFilters}) {
    const [filters, setFilters] = useState({
        categories: [], size: [], subCategory: []
    })

    const removeFilter = (data, name) => {
        let array = filters[name];
        let filtered = array.filter((value) => (
            value !== data
        ));
        setFilters({...filters, [name]: filtered})
    }

    function arrayRemove(arr, value) {
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    useEffect(() => {
        setUserFilters(filters)
    }, [filters])

    const handleCategory = (e) => {
        let temp = {...filters}
        if (e.target.checked){
            temp.categories.push(e.target.name)
        }
        else{
            temp.categories = arrayRemove(temp.categories, e.target.name)
        }
        setFilters(temp)
        console.log(`temp`, temp)
    }

    const handleSubCategory = (e) => {
        let temp = {...filters}
        if (e.target.checked){
            temp.subCategory.push(e.target.name)
        }
        else{
            temp.subCategory = arrayRemove(temp.subCategory, e.target.name)
        }
        setFilters(temp)
        console.log(`temp`, temp)
    }

    const handleSizes = (e) => {
        let temp = {...filters}
        if (e.target.checked){
            temp.size.push(e.target.name)
        }
        else{
            temp.size = arrayRemove(temp.size, e.target.name)
        }
        setFilters(temp)
        console.log(`temp`, temp)
    }

    return (
        <Card>
            <CardBody>
                <div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h5 className='fw-bold my-0'>Filters</h5>
                        <button className='btn text-primary' onClick={() => {setFilters({
                            categories: [], size: [], subCategory: []
                        })}}>CLEAR ALL</button>
                    </div>
                    <div className='d-flex flex-wrap'>
                        {filters.categories.map(each => (
                            <h4 key={each} className='me-2' style={{fontWeight: 300}} onClick={() => removeFilter(each, 'categories')}>
                                <span className="badge bg-secondary p-3" style={{fontWeight: 300}}> X {each}</span>
                            </h4>
                        ))}
                        {filters.subCategory.map(each => (
                            <h4 key={each} className='me-2' style={{fontWeight: 300}} onClick={() => removeFilter(each, 'subCategory')}>
                                <span className="badge bg-secondary p-3" style={{fontWeight: 300}}> X {each}</span>
                            </h4>
                        ))}
                        {filters.size.map(each => (
                            <h4 key={each} className='me-2' style={{fontWeight: 300}} onClick={() => removeFilter(each, 'size')}>
                                <span className="badge bg-secondary p-3" style={{fontWeight: 300}}> X {each}</span>
                            </h4>
                        ))}
                    </div>

                    <div className='divider my-2'></div>
                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Category
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name="men"
                                            checked={filters.categories.includes("men")} onChange={handleCategory} />
                                        <h5 className='my-0'>Men</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name="women" 
                                            checked={filters.categories.includes("women")} onChange={handleCategory} />
                                        <h5 className='my-0'>Women</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name="boys"
                                            checked={filters.categories.includes("boys")} onChange={handleCategory} />
                                        <h5 className='my-0'>Boys</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name="girls" 
                                            checked={filters.categories.includes("girls")} onChange={handleCategory} />
                                        <h5 className='my-0'>Girls</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Sub Category
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='tshirts'
                                            checked={filters.subCategory.includes("tshirts")} onChange={handleSubCategory} />
                                        <h5 className='my-0'>Tshirts</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='shirts'
                                            checked={filters.subCategory.includes("shirts")} onChange={handleSubCategory} />
                                        <h5 className='my-0'>Shirts</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='hoodies'
                                            checked={filters.subCategory.includes("hoodies")} onChange={handleSubCategory} />
                                        <h5 className='my-0'>Hoodies</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2' name='jeans'>
                                        <input type="checkbox" className='form-check me-2' name='jeans'
                                            checked={filters.subCategory.includes("jeans")} onChange={handleSubCategory} />
                                        <h5 className='my-0'>Jeans</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Sizes
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='small'
                                            checked={filters.size.includes("small")} onChange={handleSizes} />
                                        <h5 className='my-0'>Small (S)</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='medium'
                                            checked={filters.size.includes("medium")} onChange={handleSizes} />
                                        <h5 className='my-0'>Medium (M)</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='large'
                                            checked={filters.size.includes("large")} onChange={handleSizes} />
                                        <h5 className='my-0'>Large (L)</h5>
                                    </div>
                                    <div className='d-flex align-items-center my-2'>
                                        <input type="checkbox" className='form-check me-2' name='extra large'
                                            checked={filters.size.includes("extra large")} onChange={handleSizes} />
                                        <h5 className='my-0'>Extra Large (XL)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}
