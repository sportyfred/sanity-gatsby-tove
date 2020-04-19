import React from 'react'
import Figure from './figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'


const serializers = {
  types: {
    figure: Figure,
    youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return ( <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
      />
    </div>)
      }
  }
}

export default serializers




