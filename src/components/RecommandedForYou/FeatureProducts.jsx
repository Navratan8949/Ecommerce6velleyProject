import React from 'react';
import './FeatureProducts.css';
// import BasicRating from '../Pages/Rating';
import Fade from 'react-reveal/Fade';
import new_collections from '../Assets/new_collections';
import { Link } from 'react-router-dom';

const FeatureProducts = () => {
    const chunks = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );

    const productChunks = chunks(new_collections, 4);

    return (
        <div className='display-flex-main-container'>
            <Fade top distance="10%" duration={800}>
                {productChunks.map((row, rowIndex) => (
                    <div key={rowIndex} className="display-flex">
                        {row.map((product, colIndex) => (
                            <div key={colIndex} className="hello-2">
                                <div className="slideImg-2">
                                    <Link to={`/Product/${product.id}`}>
                                        <img width={'300px'} height={'200px'} src={product.image} alt="" />
                                    </Link>
                                </div>
                                <div className='basic-div' >
                                    {/* <BasicRating /> */}
                                    <p>{product.store}</p>
                                    <b>{product.name}</b>
                                    <span className="rupee">{product.new_price}</span>
                                    <span className="rupee">{product.old_price}</span>
                                </div>
                            </div>

                        ))}

                    </div>
                ))}

            </Fade>
        </div>
    );
}

export default FeatureProducts;
