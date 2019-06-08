import { gql } from 'apollo-server'

const trackSchema = gql`

    type Track {
        id: String
        href: String
        name: String
        popularity: Int
        uri: String
        artist: Artist
    }

    extend type Query {
        tracks: [Track]
        track(id: String): Track
    }

`

export default trackSchema