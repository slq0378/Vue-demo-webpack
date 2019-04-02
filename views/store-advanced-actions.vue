<template>
    <div>
        <h5>vuex 高级用法 getter、actions、modules </h5>
        <div>count:{{count}}</div>
        <button @click="handleAsyncIncrement">action +1</button>
        <button @click="testPromise">Promise</button>
    </div>
</template>
<script type="text/javascript">
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    methods: {
        handleAsyncIncrement() {
            this.$store.dispatch('asyncIncrement').then(() => {
                console.log(this.$store.state.count)
            });
        },
        testPromise() {
            /** Promise 是ES6的一种异步方案
             * resolved 已失败
             * rejected 已完成
             * pending  进行中
             */
            // then 异步回调 对应 resolve
            // catch 错误回调 对应 reject
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random()
                    if (random > 0.5) {
                        resolve(random)
                    } else {
                        reject(random)
                    }
                }, 1000)
            }).then((params) => {
                console.log('resolve:', params)
            }).catch((error) => {
                console.log('reject:', error)
            })
            // all 方法，并行执行异步操作，以最晚执行的结果进行 then
            function getNumber1() {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random()
                        resolve(random + 1)
                    }, 1000)
                });
                return promise
            }

            function getNumber2() {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random()
                        resolve(random + 2)
                    }, 1000)
                });
                return promise
            }

            function getNumber3() {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const random = Math.random()
                        resolve(random + 3)
                    }, 1000)
                });
                return promise
            }
            // 传入一个数组，按照顺序返回结果数组
            Promise.all([getNumber1(), getNumber2(), getNumber3()]).then(result => {
                console.log('all:', result)
            })

            // race 方法，谁执行快就用谁的结果进行then
            function getNumber4() {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('getNumber4 resolve 下载图片 ')
                        var img = new Image()
                        img.onload = function() {
                            resolve(img)
                        }
                    }, 1000)
                });
                return promise
            }

            function getNumber5() {
                const promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('getNumber5 resolve')
                        reject('下载图片超时');
                    }, 5000)
                });
                return promise
            }
            // 以最快的执行结果为准，另外的舍弃
            // 这个例子，两个请求异步进行，如果先下载图片成功，就进入then，或者下载图片超时进入catch
            Promise.race([getNumber4(), getNumber5()])
                .then((result) => {
                    console.log('race resolve:', result)
                })
                .catch((error) => {
                    console.log('race reject:', error)
                })
        }
    }
}
</script>
<style type="text/css" scoped>
</style>