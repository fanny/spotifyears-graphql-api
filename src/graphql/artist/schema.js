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

    interface MutationResponse {
        code: String!
        success: Boolean!
        message: String!
    }

    type ArtistMutationResponse implements MutationResponse {
        code: String!
        success: Boolean!
        message: String!
        artist: Artist
    }

    type Mutation {
        addArtist(artist: ArtistInput): ArtistMutationResponse
    }

    input ArtistInput {
        id: String
        href: String
        name: String
        uri: String
    }

`

export default artistSchema
