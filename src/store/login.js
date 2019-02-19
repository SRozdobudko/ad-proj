
export default {
    state : {
        user: null
    },
    mutations: { // 2
        takeUser(state, payload) {
            state.user = payload;
        }
    },
    actions: { // 1
        takeUser({commit}, payload) { // COMMIT wil dispatch different MUTATION
            commit('takeUser', payload);
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
}