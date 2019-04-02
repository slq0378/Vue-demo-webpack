import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 配置相关
    state: {
        count: 0, // 任何组件都可以通过$store.state.count读取,
        list: [5651, 3, 5, 10, 2, 23, 456, 12312, 12]
    },
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
    }
})
export default store;