import { useQuery } from '@apollo/client';
import { ALL_SLIDES } from './queries';

export const useSlides = () => {
    const result = useQuery(ALL_SLIDES);
    return result;
}