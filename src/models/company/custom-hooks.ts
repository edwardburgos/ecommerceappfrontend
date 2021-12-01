import { useQuery } from '@apollo/client';
import { COMPANY_BRAND } from './queries';

export const useCompanyBrand = () => {
    const result = useQuery(COMPANY_BRAND);
    return result;
}