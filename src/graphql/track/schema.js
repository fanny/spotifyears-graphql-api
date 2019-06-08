import { gql } from 'apollo-server'

const trackSchema = gql`

    type Track {
        id: String
        href: String
        name: String
        popularity: Int
        uri: String
    }

    extend type Query {
        tracks: [Track]
    }

`

export default trackSchema