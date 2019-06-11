import tracksData from '../../data/tracks'
import artistResolver from '../artist/resolvers'

const trackResolvers = {
    Query: {
        tracks: (_parent, args, _context, _info) => {
            const { offset, limit } = args
            return tracksData.slice(offset, limit)
        },
        track: (_parent, args, _context, _info) => {
            return tracksData.find(track => track.id == args.id)
        }
    },
    Track: {
        artist: artistResolver.Query.artist
    }
}

export default trackResolvers