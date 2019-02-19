export default {
    state: {
        loading: false,
        error: null
    },
    getters: {
        loading(state) {
            return state.loading;
        },
        error(state) {
            return state.error;
        }
    },
    actions: {
        setError({commit}, payload) {  // COMMIT wil dispatch different MUTATION
            commit('setError', payload);  // call MUTATION
        },
        setLoading({commit}, payload) {
            commit('setLoading',payload);
        },
        clearError({commit}) {
           commit('clearError');
        }
    },
    mutations: {
        setError(state, payload) {
            state.error = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        clearError(state) {
            state.error = null;
        }
    }
}