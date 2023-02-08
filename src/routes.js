import card from './component/card.vue'
import contact from './component/contact.vue'
import about from './component/about'
import login from './component/login'
import register from './component/register'

export default [
    { path: '/register', component: register },
    { path: '/login', component: login },
    { path: '/', component: card },
    { path: '/about', component: about },
    { path: '/contact', component: contact }
]