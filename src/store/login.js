import axios from 'axios'

export default {
    state : {
        user: null
    },
    mutations: { // 2
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: { // 1
        takeUser() { // COMMIT wil dispatch different MUTATION
            return axios.get('http://localhost:3000/user').then(resp => resp.data[0]);
        },
        getUser({commit, dispatch}) {
            dispatch('takeUser'). then(resp => {
                setTimeout(() => {
                    if(resp) {
                        commit('setUser', resp);
                        dispatch('setLoading', true);
                        dispatch('getAds');
                    }
                }, 2000);
            })
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
}