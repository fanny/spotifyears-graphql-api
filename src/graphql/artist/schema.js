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
        artist(id: String): Artist
    }

`

export default artistSchema
