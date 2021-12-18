import React from 'react'
import './Product.css';
import ReactPlayer from 'react-player'
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, video, price, rating }) {
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

    const [{ basket }, dispatch] = useStateValue();

    
    console.log(basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD__TO__BASKET',
            item: {
                id: id,
                title: title,
                image:image ,
                price: price ,
                rating: rating 
            }
        })
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
            <button className='add__product' onClick={ addToBasket }>Add to basket</button>
        </div>
    )
}

export default Product
