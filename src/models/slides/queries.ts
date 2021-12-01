import { gql } from "@apollo/client"

export const ALL_SLIDES = gql`
query Query {
    allSlides {
        name
        position
        photo
        id
    }
}`
