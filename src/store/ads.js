import axios from 'axios'

export default {
    state : {
        ads: []
    },
    mutations: { // 2
        createAd(state, payload) {
            state.ads.push(payload);
        },
        getAds(state, payload) {
            state.ads = [...payload];
        }
    },
    actions: { // 1
        createAd({commit}, payload) { // COMMIT wil dispatch different MUTATION
            payload.id = '645';

            commit('createAd', payload) // call MUTATION
        },
        getAds({commit, dispatch}) {
            setTimeout(() => {
                axios.get('http://localhost:3000/ads')
                    .then(resp => resp.data)
                    .then(ads  => {
                        dispatch('setLoading', false);
                        commit('getAds', ads);
                    })
                    }, 2000)
        }
    },
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter( ad => ad.promo);
        },
        myAds(state) {
            return state.ads;
        },
         adById(state) {
            return adId => state.ads.find(ad => ad.id === adId);
         }
    }
}