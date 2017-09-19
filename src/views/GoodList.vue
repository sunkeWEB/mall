<template>
  <div>
      <nav-header></nav-header>
      <nav-bread>
          <span slot="listA">Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
          <div class="container">
              <div class="filter-nav">
                  <span class="sortby">Sort by:</span>
                  <a href="javascript:void(0)" class="default" :class="{'cur':!sortCss}" @click="sortCss=!sortCss">Default</a>
                  <a href="javascript:void(0)" class="price" :class="{'cur':sortCss}" @click="goodssort">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                  <a href="javascript:void(0)" class="filterby stopPop" @click="filtershow">Filter by</a>
              </div>
              <div class="accessory-result">
                  <!-- filter -->
                  <div class="filter stopPop" id="filter" :class="{'filterby-show':menuPrice}">
                      <dl class="filter-price">
                          <dt>Price:</dt>
                          <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="setPriceFilterAll('all')">All</a></dd>
                          <dd v-for="(item, index) in priceFilters" >
                              <a href="javascript:void(0)" :data="index"  @click="setPriceFilter(index)" :class="{'cur':priceChecked==index}">{{item.startPrice}} - {{item.endPrice}}</a>
                          </dd>
                      </dl>
                  </div>

                  <!-- search result accessories list -->
                  <div class="accessory-list-wrap">
                      <div class="accessory-list col-4">
                          <ul>
                              <li v-for="(item, index) in goodsList">
                                  <div class="pic">
                                      <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
                                  </div>
                                  <div class="main">
                                      <div class="name">{{item.productName}}</div>
                                      <div class="price">{{item.salePrice | cuttyPrice}}</div>
                                      <div class="btn-area">
                                          <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                              <img src="./../assets/loading-spinning-bubbles.svg" alt="加载中..." v-show="loading">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click="filtershidden"></div>
      <nav-footer></nav-footer>
  </div>
</template>

<script type="text/ecmascript-6">
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/login.css'
    import './../assets/css/product.css'
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import NavBread from '@/components/Bread'
    import axios from 'axios'
    import ModelFrom from './../components/Model.vue'
    export default {
        components:{
            NavHeader,
            NavFooter,
            NavBread,
            ModelFrom
        },
        data () {
            return {
                loading:false,
                sortCss:false,
                goodsList: [],
                priceFilters:[
                    {
                        startPrice:'0.00',
                        endPrice:'500.00'
                    },
                    {
                        startPrice:'500.00',
                        endPrice:'1000.00'
                    },
                    {
                        startPrice:'1000.00',
                        endPrice:'2000.00'
                    },
                    {
                        startPrice:'2000.00',
                        endPrice:'3000.00'
                    }
                ],
                priceChecked:'all',
                menuPrice:false,
                overLayFlag:false,
                sortFlag:true,
                page:1,
                pageSize:8,
                busy:true
            }
        },
        mounted () {
            this.getGoodsList();
        },
        methods:{
            getGoodsList (flag) {
                let param = {
                    page:this.page,
                    pageSize:this.pageSize,
                    sortnum:this.sortFlag?1:-1,
                    priceLeval:this.priceChecked
                };
                this.loading = true;
                axios.get('/goods',{
                    params:param
                }).then((res)=>{
                    this.loading = false;
                    let goodsLists = res.data;
                    if(flag) {
                        this.goodsList = this.goodsList.concat(goodsLists.result.list);
                        if (goodsLists.count<=this.pageSize){
                            this.busy=true
                        }else{
                            this.busy=false
                        }
                    }else{
                        this.goodsList = goodsLists.result.list;
                        this.busy=false
                    }
                })
            },
            filtershow () {
                this.menuPrice = true;
                this.overLayFlag = true
            },
            filtershidden () {
                this.menuPrice = false;
                this.overLayFlag = false
            },
            setPriceFilter (index) {
                this.priceChecked = index;
                this.filtershidden();
                this.page = 1;
                this.getGoodsList(this.priceChecked)
            },
            goodssort () {
                this.sortCss = !(this.sortCss);
                this.sortFlag = !(this.sortFlag);
                this.getGoodsList();
            },
            loadMore(){
                this.busy = true;
                setTimeout(() => {
                    this.page++;
                    this.getGoodsList(true);
                }, 500);
            },
            addCart(productId){
                axios.post('/addCart',{
                    productId:productId
                }).then((res)=>{
                    if(res.data.status=='100001') {
                        this.$layer.msg("你还没有登录");
                    }else{
                        this.$layer.msg("加入购物车成功");
                    }
                }).catch((err)=>{
                    this.$layer.msg("加入购物车失败"+err);
                })
            },
            setPriceFilterAll (index) {
                this.priceChecked = 'all';
                this.filtershidden();
                this.page = 1;
                this.getGoodsList(this.priceChecked)
            }
        },
        filters:{
          cuttyPrice (value) {
              return "￥"+value
          }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .btn {
        background-color: #fff;
        padding: 0;

    }
    .load-more{
        color: #00B7FF;
        height: 100px;
        line-height: 100px;
    }
</style>