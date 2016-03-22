export const SET_VIDEO_SOURCE = 'SET_VIDEO_SOURCE';
export function setVideoSource(bandwidth) {
  return {
    type: SET_VIDEO_SOURCE, bandwidth
  }
}

export const PLAY_VIDEO = 'PLAY_VIDEO';
export function playVideo() {
  return {
    type: PLAY_VIDEO
  }
}

export const SET_VIDEO_NODE = 'SET_VIDEO';
export function setVideoNode(video) {
  return {
    type: SET_VIDEO_NODE, video
  }
}

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export function updateProgress() {
  return {
    type: UPDATE_PROGRESS
  }
}

export const UPDATE_VIDEO_STATUS = 'UPDATE_VIDEO_STATUS';
export function updateVideoStatus(status) {
  return {
    type: UPDATE_VIDEO_STATUS, status
  }
}
