import { handleVideoPlayer } from '@/store/VideoSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const VideoIframe = () => {

    const OpenVideo = useSelector((state) => state.VideoIframe.isVideoIframeOpen);
    const VideoUrl = useSelector((state) => state.VideoIframe.VideoUrl);
    const dispatch = useDispatch();

  return (
    <div>
           {OpenVideo ?
        <>
          <div className={css.close_btn} onClick={() => dispatch(handleVideoPlayer(VideoUrl))}><MdCancel size={40} color='#c707e4' /></div>
          <iframe className={css.video} width="95%" height="85%" src={VideoUrl} title="Swirl365 Youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </> : null
      }
    </div>
  )
}

export default VideoIframe;
