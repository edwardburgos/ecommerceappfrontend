import { useSlides } from '../../../../models/slides/custom-hooks';
import { Carousel } from 'react-bootstrap';
import s from './Slides.module.css';
import { SlidesTypes } from '../../../../extras/types';

export default function Slides() {

    const { loading, error, data } = useSlides();

    if (loading) return null

    if (error) return null

    return (
        <Carousel className={s.carousel}>
            {
                data.allSlides.map((e: SlidesTypes, index: number) => (
                    <Carousel.Item key={index}>
                        <div>
                            <img
                                className='d-block w-100'
                                src={e.photo}
                                alt={`Slide number ${e.position}`}
                            />
                            <h3 className={s.slideCaption}>{e.name}</h3>
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}