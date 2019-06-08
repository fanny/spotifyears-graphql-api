import { gql } from 'apollo-server'

const artistSchema = gql`

    type Artist {
        id: String
        href: String
        name: String
        uri: String
    }

    type Query {
        artists: [Artist]
    }

`

export default artistSchema
