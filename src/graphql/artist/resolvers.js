import artistsData from '../../data/artists'

const artistResolvers = {
    Query: {
        artists: (_parent, args, _context, _info) => {
            const { offset, limit } = args
            return artistsData.slice(offset, limit)
        },
        artist: (parent, args, _context, _info) => {
            const id = args.id || parent.artistId
            return artistsData.find(artist => artist.id == id)
        }
    },
    Mutation: {
        // TODO: add save logic
        addArtist: (_parent, args, _context, _info) => (
            {
                artist: args.artist,
                code: 200,
                success: true, 
                status: "Ok",
                message: "Your data was saved"

            }
        )
    }
}

export default artistResolvers