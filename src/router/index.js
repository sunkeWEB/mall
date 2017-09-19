import Vue from 'vue'
import Router from 'vue-router'
import Goodlist from '@/views/GoodList.vue'
import Cart from '@/views/Cart.vue'
import Adderss from '@/views/Adderss.vue'
import OrderConfirm from '@/views/OrderConfirm.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Goodlist
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/adderss',
            component: Adderss
        },
        {
            path:'/orderConfirm',
            component:OrderConfirm
        }
    ]
})
