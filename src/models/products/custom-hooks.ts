import { useQuery } from '@apollo/client';
import { PRODUCTSFROMCATEGORIES, PRODUCT } from './queries';

export const useProductsFromCategories = (urls: string[]) => {
    const result = useQuery(PRODUCTSFROMCATEGORIES, {
        variables: { urls }
    });
    return result;
}

export const useProduct = (url: string) => {
    const result = useQuery(PRODUCT, {
        variables: { url }
    })
    console.log('prueba', result)
    return result;
}