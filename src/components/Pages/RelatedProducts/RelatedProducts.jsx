import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item'
import './RelatedProduct.css'
import { Link } from 'react-router-dom'


const RelatedProducts = () => {
    return (
        <div className='relatedproducts' >
            <hr />
            <h1>Realeted Products</h1>
            <hr />

            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    return (
                        <Link to={`/Product/${item.id}`}>
                            <div style={{ display: 'flex' }}>

                                <img width={'270px'} src={item.image} alt="" onClick={window.scrollTo(0, 0)} />
                            </div>
                            <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
