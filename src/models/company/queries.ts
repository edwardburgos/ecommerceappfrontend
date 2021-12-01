import { gql } from "@apollo/client"

export const COMPANY_BRAND = gql`
query Query {
    getCompany {
        brand
        logo
    }
}`
