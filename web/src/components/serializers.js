import Figure from './figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import PortableText from '@sanity/block-content-to-react'

const serializers = {
  types: {
    figure: Figure,
    youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      }
  }
}

export default serializers




