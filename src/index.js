import { ApolloServer } from 'apollo-server'
import artistSchema from './graphql/artist/schema'
import artistResolvers from './graphql/artist/resolvers'

const server = new ApolloServer({ 
    typeDefs: artistSchema,
    resolvers: artistResolvers 
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})