import { gql } from "@apollo/client"

export const PRODUCTSFROMCATEGORIES = gql`
query Query ($urls: [String!]){
    getCategoriesProducts(urls: $urls) {
        id
        name
        url
        photo
        price
        currency
    }
}`

export const PRODUCT = gql`
query Query ($url: String!){
    getProduct(url: $url) {
        id
        name
        photos
        url
        description
        price
        currency
        stars
    }
}`