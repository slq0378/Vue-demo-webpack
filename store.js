import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 状态声明
    state: {
        count: 0, // 任何组件都可以通过$store.state.count读取,
        list: [5651, 3, 5, 10, 2, 23, 456, 12312, 12]
    },
    // 修改操作，基本用法（改变数据的放这里）
    mutations: {
        // 改变count，通过提交mutations可以在任何组件改变count值
        // 尽量不要在mutations中异步操作数据，如果要异步操作，请使用其他方式如 actions
        // this.$store.commit('increment')
        /** 
         * @method increment
         * @param  state 
         * @param  step 参数，默认1，可以传递一个对象，无限扩展
         */
        increment(state, step = 1) {
            state.count += step
        },
        decrease(state) {
            state.count--
        },
        // 乘法,直接使用type属性的对象传递参数
        multiply(state, params) {
            console.log('multiply:', params)
            /*
            {
                number: 2
                type: "multiply"
            }
            */
            state.count *= params.number
        }
    },
    // 修改操作，高级用法
    getters: {
        /**
         * @method filterList
         * @param  state对象
         * @return 过滤后的数组
         */
        filterList(state) {
            return state.list.filter(item => item <= 10)
        },
        /**
         * @method filterListCount
         * @param  state对象
         * @param  getters 对象，可以访问其他getter
         * @return 过滤后数组长度
         */
        filterListCount(state, getters) {
            return getters.filterList.length
        }
    },
    // 异步操作，高级用法（业务逻辑放这里）
    actions: {
        asyncIncrement(context) {
            console.log('actions:', context)

            function callback(resolve) {
                setTimeout(function() {
                    context.commit('increment')
                    resolve()
                }, 1000)
            }
            let promise = new Promise(callback)
            return promise;
        }
    }
})
export default store;

// modules ,可以将分隔成不同模块
const modulesA = {
    state: {
        count:12
    },
    mutations: {},
    actions: {},
    getters: {}
}
const modulesB = {
    state: {
        count:1
    },
    mutations: {},
    actions: {},
    getters: {}
}
// 引入多个模块
const storeTest = new Vuex.Store({
    modules: {
        modulesA,
        modulesB
    }
})
// 访问不同模块的数据
console.log(storeTest.state.modulesA.count)
console.log(storeTest.state.modulesB.count)