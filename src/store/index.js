import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import notification from './notification'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ads,
        login,
        notification,  // set LOADING and display ERROR
    }
})