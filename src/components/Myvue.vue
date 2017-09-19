<template>
    <div>
        <a href="javascript:;" @click="get">Get請求</a><br/>
        {{message}}
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default {
        data () {
            return {
                message: ''
            }
        },
        methods: {
            get () {
                axios.get('package.json').then((res) => {
                    this.message = res.data
                })
            }
        },
        mounted () {
            axios.interceptors.request.use((res) => {
            console.log('正確的清瓊');
            return res;
        }, (err) => {
            console.log('錯誤的請求' + err);
        })
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>