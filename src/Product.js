import React from 'react'
import './Product.css';
import ReactPlayer from 'react-player'
import "./TV.mp4"; 

function Product({ title, image, video, price, rating }) {
    let picture;
    if(image){
        picture = <img src={ image } alt={ title } /> ;
    }else{
        picture = <ReactPlayer 
                    url={ video }
                    playing={ true }
                    muted={ true }
                    loop={ true }/> ;
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p>{ title }</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong> { price }</strong>
                </p>
                <div className="product__rating">
                   { Array(rating).fill().map((_, i) =>( 
                    <p>⭐</p>
                   ))}
                </div>
            </div>
            <div className="product__imageContainer">
                { picture }
                
            </div>
            <button className='add__product'>Add to basket</button>
        </div>
    )
}

export default Product
