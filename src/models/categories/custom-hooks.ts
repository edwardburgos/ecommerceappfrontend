import { useQuery } from '@apollo/client';
import { MENU } from './queries';

export const useMenu = () => {
    const result = useQuery(MENU);
    return result;
}