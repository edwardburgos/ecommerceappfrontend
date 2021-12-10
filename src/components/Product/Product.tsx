import s from './Product.module.css';
import { ProductType } from '../../extras/types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UnitsSelector from '../UnitsSelector/UnitsSelector';

export default function Product({ data }: { data: ProductType }) {
    const [units, setUnits] = useState(1)
    const { url, photo, name, currency, price } = data
    return (
        <div className={s.container}>
            <Link className={s.link} to={url}>
                <img src={photo} alt={name} className={s.photo} />
                <div className='p-2 pb-3'>
                    <p className={s.title}>{name}</p>
                    <span>{currency === 'PEN' ? 'S/. ' : '$ '} {price}</span>
                </div>
            </Link>
            <div className={s.unitsSelectorContainer}>
                <UnitsSelector units={units} setUnits={setUnits} />
            </div>
            <button className={`button ${s.addToCart}`}>Add to cart</button>
        </div>
    )
}