import artistsData from '../../data/artists'

const artistResolvers = {
    Query: {
        artists: () => artistsData,
        artist: (_parent, args, _context, _info) => {
            console.log(args)
            return artistsData.find(artist => artist.id == args.id)
        }
    }
}

export default artistResolvers