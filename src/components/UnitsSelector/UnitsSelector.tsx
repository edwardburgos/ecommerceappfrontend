import s from './UnitsSelector.module.css';
import { ProductType } from '../../extras/types';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useProduct } from "../../models/products/custom-hooks"
import { Carousel } from 'react-bootstrap';
import add from '../../assets/add.svg';
import remove from '../../assets/remove.svg';

export default function UnitsSelector({ units, setUnits }: { units: number, setUnits: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div className={s.unitContainer}>
            <div className={s.unitButtonRemove}>
                <img src={remove} alt='remove' className={s.unitButtonIcon} onClick={() => { if (units > 1) setUnits(units - 1) }} />
            </div>
            <div className={s.units}>
                <input value={units} className={s.unitsInput} onChange={e => { if (parseInt(e.target.value) > 0) setUnits(parseInt(e.target.value))}} />
            </div>
            <div className={s.unitButtonAdd}>
                <img src={add} alt='add' className={s.unitButtonIcon} onClick={() => setUnits(units + 1)} />
            </div>
        </div>
    )
}