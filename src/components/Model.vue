<template>
    <div class="">
        <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':mdShow}" >
            <div class="md-modal-inner">
                <div class="md-top">
                    <div class="md-title"><slot name="title"></slot></div>
                    <button class="md-close" @click="hideModel">Close</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <slot name="message"></slot>
                    </div>
                    <div class="btn-wrap"  >
                        <slot name="btnGroup"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{'md-overlay':mdShow}"></div>
    </div>
</template>

<script>
    export default {
        props:{
            mdShow: {
                type:Boolean,
                default:false
            }
        },
        data () {
          return {

          }
        },
        methods:{
            hideModel () {
                console.log("子组件的hide触发");
                this.mdShow = false;
                this.$emit('hideModel1','dfs');
            }
        }
    }
</script>

<style>
</style>