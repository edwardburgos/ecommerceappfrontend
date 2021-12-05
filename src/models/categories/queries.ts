import { gql } from "@apollo/client"

export const MENU = gql`
query Query {
    getMenu {
      id
      name
      url
      categories {
        id
        categoryId
        name
        url
        categories {
          id
          name
          url
        }
      }
    }
}`
