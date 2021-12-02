import { gql } from "@apollo/client"

export const MENU = gql`
query Query {
    getMenu {
      id
      name
      categories {
        id
        name
        categories {
          id
          name
        }
      }
    }
}`
