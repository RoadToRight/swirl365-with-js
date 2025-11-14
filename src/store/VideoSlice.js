import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isVideoIframeOpen:false,
    VideoUrl:"",
}

export const VideoSlice = createSlice({
    name:"Video Frame",
    initialState,
    reducers:{
        toggleVideoIframeOpen:(state,action) => {
            state.isVideoIframeOpen = !state.isVideoIframeOpen;
        },
        VideoUrlBucket:(state,action) => {
            state.VideoUrl = action.payload;
        }
    }
})

export default VideoSlice.reducer;
export const {toggleVideoIframeOpen,VideoUrlBucket} = VideoSlice.actions;

// ⭐ GLOBAL FUNCTION HERE
export const handleVideoPlayer = (url) => (dispatch) => {
  dispatch(toggleVideoIframeOpen());
  if (url) dispatch(VideoUrlBucket(url));
};