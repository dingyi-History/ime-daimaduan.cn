'use strict'

export default function(router){
    router.map({
    '/':{
        component: require('./views/Index.vue')
    },
    '/sign':{
        component: require('./views/Sign.vue')
    },
    '/group':{
        component: require('./views/Group.vue')
    },
    '/qa':{
        component: require('./views/QA.vue')
    }
})
}
