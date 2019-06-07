import artistsData from '../../data/artists'

const artistResolvers = {
    Query: {
        artists: () => artistsData
    }
}

export default artistResolvers