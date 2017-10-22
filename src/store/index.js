import Vue from 'vue';

import Vuex from 'vuex';
Vue.use( Vuex );

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const store = new Vuex.Store({
	strict: true,
	state: {
        activeVideoId: null,
        clientHeight: null
	},
	getters,
	mutations,
	actions,
    modules: {

    }
});

export default store;