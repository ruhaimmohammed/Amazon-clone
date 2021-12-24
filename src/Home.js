import React from 'react'
import {Link} from "react-router-dom"
import Header from './Header';
import './Home.css';
import Product from './Product';
import "./TV.mp4";

function Home() {
    return (
        <div className="main">
            <Header />
        <div className='home'>
            <div className="home__container">
                <div className="home__imageContainer">
                    <img className='home__image' src="https://m.media-amazon.com/images/I/71G7vKHnFZL._SX3000_.jpg" alt="Banner" />
                </div>
                <div className="home__row">
                    <Product 
                    id="1"
                    title= "Zero to one"
                    price={250}
                    image="https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                    />
                    <Product
                    id="2"
                    title= "HP 15 AMD Ryzen 5 5500U 15.6 inch(39.6 cms) FHD Laptop (8GB RAM/512GB SSD/Windows 10/MS Office/1.69 kg), 15s-eq2040AU"
                    price={56999}
                    image="https://m.media-amazon.com/images/I/81SdJG3OUjL._SX450_.jpg"
                    rating={5}
                     />
                </div>
                <div className="home__row">
                    <Product 
                    id="3"
                    title= "Nike Air Force 1 GORE-TEX"
                    price={9995}
                    image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kkeylxui0asbndztnwux/air-force-1-gore-tex-shoes-xz207L.png"
                    rating={4}
                    />
                    <Product 
                    id="4"
                    title= "OnePlus 2 (Sandstone Black, 64GB)"
                    price={22999}
                    image="https://content.oneplus.net/skin/frontend/oneplus2015/default/images/feature/two/impress-img.png"
                    rating={5}
                    />
                    <Product 
                    id="5"
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Furious Red)"
                    price={329}
                    image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSd1n-wnE93le8f5YDlNOPoDbYphavUMJL-cwK8zlxPosX4Rx_b0ngIRbsyX6pt6zm1HQ0y4lzj&usqp=CAc"
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id="6"
                    title= "Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black) (2021 Model)"
                    price={61990}
                    image="https://m.media-amazon.com/images/I/61GwJAhftvS._SX425_.jpg"
                    video="https://www.youtube.com/watch?v=GRFKeCRoZco"
                    rating={4}/>               

                </div>
            </div>
        </div>
        </div>
    )
}

export default Home