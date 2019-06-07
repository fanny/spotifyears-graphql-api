import { gql } from 'apollo-server'

const artistSchema = gql`

    type Artist {
        href: String
        name: String
        type: String
        uri: String
    }

    type Query {
        artists: [Artist]
    }

`

export default artistSchema
