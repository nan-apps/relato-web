//import * as services from '../services';

export const ACTIVE_VIDEO = ({commit}, {videoId}) => {
	commit( 'CHANGE_ACTIVE_VIDEO_ID', videoId  );
}

export const SET_CLIENT_HEIGHT = ({commit}, clientHeight) => {
	commit( 'CHANGE_CLIENT_HEIGHT', clientHeight);
}

