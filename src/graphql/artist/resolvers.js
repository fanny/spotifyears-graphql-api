import artistsData from '../../data/artists'

const artistResolvers = {
    Query: {
        artists: () => artistsData,
        artist: (_parent, args, _context, _info) => {
            return artistsData.find(artist => artist.id == args.id)
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
                message: "Your data is recovered"

            }
        )
    }
}

export default artistResolvers