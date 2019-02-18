import VueRouter from 'vue-router'
import Home from './views/Home'
import Registration from './views/Registration'
import Orders from './views/Orders'
import Login from './views/Login'
import AdList from './views/AdList'
import Ad from './views/Ad'

export default new VueRouter ({
    routes: [
        {path: '', component: Home},
        {path: '/login', component: Login},
        {path: '/orders', component: Orders},
        {path: '/registration', component: Registration},
        {path: '/list', component: AdList},
        {path: '/ad:id', component: Ad},
    ],
    mode: 'history'
})