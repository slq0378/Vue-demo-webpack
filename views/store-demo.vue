<template>
    <div>
        <h1>状态管理vuex</h1>
        <div>{{count}}</div>
        <button @click="add">+5</button>
        <button @click="minus">-1</button>
        <button @click="multiply">*2</button>
    </div>
</template>
<script type="text/javascript">
export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        add() {
        	// 传递参数
            this.$store.commit('increment', 5)
        },
        minus() {
            this.$store.commit('decrease')
        },
        multiply() {
        	// 直接使用type属性的对象传递参数
            this.$store.commit({
                type: 'multiply',
                number: 2
            })
        }
    }
}
</script>
<style type="text/css" scoped>
</style>