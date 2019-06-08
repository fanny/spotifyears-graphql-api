import tracksData from '../../data/tracks'

const trackResolvers = {
    Query: {
        tracks: () => tracksData
    }
}

export default trackResolvers