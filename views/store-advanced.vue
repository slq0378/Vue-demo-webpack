<template>
    <div>
        <h5>vuex 高级用法 getter、actions、modules </h5>
        <div>list:{{list}}</div>
        <div>直接过滤方式:{{filteredList}}</div>
        <div>getter方式:{{filterList}}</div>
        <div>getter方式:{{filterListCount}}</div>
    </div>
</template>
<script type="text/javascript">
export default {
    computed: {
        list() {
            return this.$store.state.list
        },
        filteredList() {
            return this.$store.state.list.filter(item => item <= 10)
        },
        filterList(){
            return this.$store.getters.filterList
        },
        filterListCount(){
            return this.$store.getters.filterListCount
        }
    },
    methods: {
    }
}
</script>
<style type="text/css" scoped>
</style>