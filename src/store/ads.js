export default {
    state : {
        ads: [
            {
                id: '1',
                title: '1 ad',
                description: '1-st ad',
                promo: false,
                src: 'https://yachtclubgames.com/wp-content/uploads/2018/08/sk_tt_retail1.png'
            },
            {
                id: '2',
                title: '2 ad',
                description: '2-nd ad',
                promo: true,
                src: 'https://lumiere-a.akamaihd.net/v1/images/tmk_largegamethumbnails_thorbossbattle_960x540_1_66118d75.png?region=0%2C0%2C960%2C540'
            },
            {
                id: '3',
                title: '3 ad',
                description: '3-rd ad',
                promo: false,
                src: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LegoMarvelSuperHeroes2_image950w.jpg'
            },
            {
                id: '4',
                title: '4 th',
                description: '4 ad',
                promo: false,
                src: 'https://d2q63o9r0h0ohi.cloudfront.net/images/fb-share/facebook-share-default-04812acb25dba13239f3dbe52750ff0f4ae58cc52b5924e7cf6ffea5e1b8993d4f07bb5918b25cb9f8bb8f626f694e20e579f8eb50a43de1c1fd2fc1d6c81a60.jpg'
            },
        ]
    },
    mutations: { // 2
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: { // 1
        createAd({commit}, payload) { // COMMIT wil dispatch different MUTATION
            payload.id = '645';

            commit('createAd', payload) // call MUTATION
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