import Vue from 'vue';
// 引入路由插件
import VueRouter from 'vue-router'
// 加载路由插件
Vue.use(VueRouter)


// 配置路由路径
const Routers = [{
        path: '*', // 当路径不存在是，重定向到index
        redirect: '/store-advanced-actions' // 重定向
    }, {
        path: '/index/',
        meta: {
            title: '首页'
        },
        // 按需加载写法
        component: (resolve) => require(['./views/index.vue'], resolve)
    }, {
        path: '/user/:id/:name/:code', // 路由带参数
        meta: {
            title: '用户'
        },
        // 按需加载写法
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '/index1',
        // 一次性加载写法
        component: require('./views/index.vue')
    },
    {
        path: '/about',
        meta: {
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/store-demo',
        meta: {
            title: '状态管理'
        },
        component: (resolve) => require(['./views/store-demo.vue'], resolve)
    },
    {
        path: '/store-advanced',
        meta: {
            title: '状态管理高级用法'
        },
        component: (resolve) => require(['./views/store-advanced.vue'], resolve)
    },
    {
        path: '/store-advanced-actions',
        meta: {
            title: '状态管理高级用法'
        },
        component: (resolve) => require(['./views/store-advanced-actions.vue'], resolve)
    }
]
// 配置路由模式
const RouterConfig = {
    // 使用H5的History路由模式（需要在webpack-dev-server中配置），如果不指定默认#，
    mode: 'history',
    routes: Routers
}

// 生成路由 to 目标路由 from 上一级路由 
const router = new VueRouter(RouterConfig)
// 路由改变后
router.afterEach((to, from) => {

})
// 路由改变前 to 目标路由 from 上一级路由 next函数 进入下一个钩子函数，必须调用
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        window.document.title = to.meta.title
    }
    next()
})

export default router