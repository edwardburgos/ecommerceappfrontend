import s from './ProductDetails.module.css';
import { useParams } from "react-router-dom";
import { useProduct } from "../../models/products/custom-hooks"
import { Carousel } from 'react-bootstrap';
import UnitsSelector from '../UnitsSelector/UnitsSelector';
import { useState } from 'react';

export default function ProductDetails() {
    
    const [units, setUnits] = useState(1);
    let params = useParams();
    const productURL = params.product!;
    const { loading, error, data } = useProduct(productURL);
    if (loading || error) return null;
    const { photos, name, description, price, currency } = data.getProduct;

    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <Carousel className={s.carousel}>
                    {
                        photos.map((e: string, index: number) => (
                            <Carousel.Item key={index}>
                                <img
                                    className='d-block w-100'
                                    src={e}
                                    alt={`${index}`}
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
            <div className={s.descriptionContainer}>
                <h1>{name}</h1>
                <span className={s.price}>{currency === 'PEN' ? 'S/. ' : '$ '} {price}</span>
                <div className={s.unitsSelectorContainer}>
                    <UnitsSelector units={units} setUnits={setUnits} />
                </div>
                <button className={`button ${s.addToCart}`}>Add to cart</button>
                {description ? <div>{description}</div> : null}
            </div>
        </div>
    )
}