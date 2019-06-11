import tracksData from '../../data/tracks'
import artistResolver from '../artist/resolvers'

const trackResolvers = {
    Query: {
        tracks: (_parent, args, _context, _info) => {
            const { offset, limit } = args
            return tracksData.slice(offset, limit)
        },
        track: (_parent, args, _context, _info) => (
            tracksData.find(track => track.id == args.id)
        )
    },
    Track: {
        artist:(parent, _args, _context, _info) => {
            return artistResolver.Query.artist(
                undefined,
                {id: parent.artistId},
                undefined,
                undefined
            )
        }
    }
}

export default trackResolvers