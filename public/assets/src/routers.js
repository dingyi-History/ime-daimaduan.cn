'use strict'

export default function(router){
    router.map({
    '/':{
        component: require('./views/Index.vue')
    },
    /* 404路由 */
    '*': {
        component: require('./views/Index.vue')
    },
    '/sign':{
        component: require('./views/Sign.vue'),
        subRoutes: {
        '/':{
            component: require('./components/sign/_signin.vue')
        },
        'signup':{
            component: require('./components/sign/_signup.vue')
        }
 
    },
    },
    '/group':{
        component: require('./views/Group.vue')
    },
    '/qa':{
        component: require('./views/QA.vue')
    }
})
}
