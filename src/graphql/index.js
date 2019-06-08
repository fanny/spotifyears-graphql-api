import artistSchema from './artist/schema'
import trackSchema from './track/schema'
import artistResolvers from './artist/resolvers'
import trackResolvers from './track/resolvers'

const typeDefs = [artistSchema, trackSchema]
const resolvers = [artistResolvers, trackResolvers]

export { typeDefs, resolvers }