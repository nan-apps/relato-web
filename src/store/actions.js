//import * as services from '../services';

export const ACTIVE_SECTION = ({commit}, sectionId) => {
	commit( 'CHANGE_ACTIVE_SECTION_ID', sectionId  );
}

export const SET_CLIENT_HEIGHT = ({commit}, clientHeight) => {
	commit( 'CHANGE_CLIENT_HEIGHT', clientHeight);
}

