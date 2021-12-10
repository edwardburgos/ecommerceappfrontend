//import { useSlides } from '../../../../models/slides/custom-hooks';
// import { Carousel } from 'react-bootstrap';
import s from './CategoryContent.module.css';
//import { SlidesTypes } from '../../../../extras/types';
import { useParams } from "react-router-dom";
import { useProductsFromCategories } from "../../models/products/custom-hooks"
import Product from '../Product/Product';
import { ProductType } from '../../extras/types';


export default function CategoryContent() {


    // const { loading, error, data } = useSlides();

    // if (loading) return null

    // if (error) return null
    let params = useParams();

    const categories = params.categories!.split('-')
    const { loading, error, data } = useProductsFromCategories(categories)

    if (loading || error) return null

    return (
        // <Carousel className={s.carousel}>
        //     {
        //         data.allSlides.map((e: SlidesTypes, index: number) => (
        //             <Carousel.Item key={index}>
        //                 <div>
        //                     <img
        //                         className='d-block w-100'
        //                         src={e.photo}
        //                         alt={`Slide number ${e.position}`}
        //                     />
        //                     <h3 className={s.slideCaption}>{e.name}</h3>
        //                 </div>
        //             </Carousel.Item>
        //         ))
        //     }
        // </Carousel>
        <div className={s.container}>
            {data.getCategoriesProducts.map((e: ProductType, index: number) =>
                <Product key={index} data={e} />
            )}
        </div>

    )
}