import Vue from 'vue'
import Router from 'vue-router'
import Unixtime from '../components/Unixtime'
import Urlcode from '../components/Urlcode'
import Jsonformat from '../components/Jsonformat'
import Qrcode from '../components/Qrcode'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/unixtime',
            name: 'unixtime',
            component: Unixtime
        },
        {
            path: '/urlcode',
            name: 'urlcode',
            component: Urlcode
        },
        {
            path: '/jsonformat',
            name: 'jsonformat',
            component: Jsonformat
        },
        {
            path: '/qrcode',
            name: 'qrcode',
            component: Qrcode
        },
    ]
})
