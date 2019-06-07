import { ApolloServer, gql } from 'apollo-server'

const artists = [
    {
        href: "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN",
        id: "5WUlDfRSoLAfcVSX1WnrxN",
        name: "Sia",
        type: "artist",
        uri: "spotify:artist:5WUlDfRSoLAfcVSX1WnrxN"
    },
    {
        href: "https://api.spotify.com/v1/artists/3OIHrPeryKmEnrOHCh0x7a",
        id: "3OIHrPeryKmEnrOHCh0x7a",
        name: "Das Sound Machine",
        type: "artist",
        uri: "spotify:artist:3OIHrPeryKmEnrOHCh0x7a"
    },
    {
        href: "https://api.spotify.com/v1/artists/50JJSqHUf2RQ9xsHs0KMHg",
        id: "50JJSqHUf2RQ9xsHs0KMHg",
        name: "Jon Bellion",
        type: "artist",
        uri: "spotify:artist:50JJSqHUf2RQ9xsHs0KMHg"
    }
]

const typeDefs = gql`
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

const resolvers = {
    Query: {
        artists: () => artists
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})