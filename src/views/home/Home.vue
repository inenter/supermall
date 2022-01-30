<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

<!--    <tab-control :titles="['流行', '新款', '精选']"-->
<!--                 @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"/>-->
<!--    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">-->
<!--      <HomeSwiper :banners="banners"/>-->
<!--      <recommend-view :recommends="recommends"></recommend-view>-->
<!--      <feature-view/>-->
<!--      <tab-control :titles="['流行', '新款', '精选']"-->
<!--                   @tabClick="tabClick" ref="tabControl2"/>-->
<!--      <goods-list :goods="showGoods"/>-->
<!--    </scroll>-->

    <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"/>
    <goods-list :goods="showGoods"/>

    <ul>
      <li>商品展示1</li>
      <li>商品展示2</li>
      <li>商品展示3</li>
      <li>商品展示4</li>
      <li>商品展示5</li>
      <li>商品展示6</li>
      <li>商品展示7</li>
      <li>商品展示8</li>
      <li>商品展示9</li>
      <li>商品展示10</li>
      <li>商品展示11</li>
      <li>商品展示12</li>
      <li>商品展示13</li>
      <li>商品展示14</li>
      <li>商品展示15</li>
      <li>商品展示16</li>
      <li>商品展示17</li>
      <li>商品展示18</li>
      <li>商品展示19</li>
      <li>商品展示20</li>
      <li>商品展示21</li>
      <li>商品展示22</li>
      <li>商品展示23</li>
      <li>商品展示24</li>
      <li>商品展示25</li>
      <li>商品展示26</li>
      <li>商品展示27</li>
      <li>商品展示28</li>
      <li>商品展示29</li>
      <li>商品展示30</li>
      <li>商品展示31</li>
      <li>商品展示32</li>
      <li>商品展示33</li>
      <li>商品展示34</li>
      <li>商品展示35</li>
      <li>商品展示36</li>
      <li>商品展示37</li>
      <li>商品展示38</li>
      <li>商品展示39</li>
      <li>商品展示40</li>
      <li>商品展示41</li>
      <li>商品展示42</li>
      <li>商品展示43</li>
      <li>商品展示44</li>
      <li>商品展示45</li>
      <li>商品展示46</li>
      <li>商品展示47</li>
      <li>商品展示48</li>
      <li>商品展示49</li>
      <li>商品展示50</li>
      <li>商品展示51</li>
      <li>商品展示52</li>
      <li>商品展示53</li>
      <li>商品展示54</li>
      <li>商品展示55</li>
      <li>商品展示56</li>
      <li>商品展示57</li>
      <li>商品展示58</li>
      <li>商品展示59</li>
      <li>商品展示60</li>
      <li>商品展示61</li>
      <li>商品展示62</li>
      <li>商品展示63</li>
      <li>商品展示64</li>
      <li>商品展示65</li>
      <li>商品展示66</li>
      <li>商品展示67</li>
      <li>商品展示68</li>
      <li>商品展示69</li>
      <li>商品展示70</li>
      <li>商品展示71</li>
      <li>商品展示72</li>
      <li>商品展示73</li>
      <li>商品展示74</li>
      <li>商品展示75</li>
      <li>商品展示76</li>
      <li>商品展示77</li>
      <li>商品展示78</li>
      <li>商品展示79</li>
      <li>商品展示80</li>
      <li>商品展示81</li>
      <li>商品展示82</li>
      <li>商品展示83</li>
      <li>商品展示84</li>
      <li>商品展示85</li>
      <li>商品展示86</li>
      <li>商品展示87</li>
      <li>商品展示88</li>
      <li>商品展示89</li>
      <li>商品展示90</li>
      <li>商品展示91</li>
      <li>商品展示92</li>
      <li>商品展示93</li>
      <li>商品展示94</li>
      <li>商品展示95</li>
      <li>商品展示96</li>
      <li>商品展示97</li>
      <li>商品展示98</li>
      <li>商品展示99</li>
      <li>商品展示100</li>
    </ul>
<!--    <back-top @click.native="backClick" v-show="isShowBackTop"/>-->

  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  // import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {debounce} from "@/common/utils";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      // BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        // isShowBackTop: false,
        // tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    // destroyed() {
    //   console.log('home destroyed');
    // },
    // activated() {
    //   this.$refs.scroll.scrollTo(0, this.saveY, 0)
    //   this.$refs.scroll.refresh()
    // },
    // deactivated() {
    //   this.saveY = this.$refs.scroll.getScrollY()
    // },
    created() {
      // 1.请求多个数据
     this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted() {
    //   // 1.图片加载完成的事件监听
    //   const refresh = this.debounce(this.$refs.scroll.refresh, 500)
    //   this.$bus.$on('itemImageLoad', () => {
    //     refresh()
    //   })
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        // this.$refs.tabControl1.currentIndex = index;
        // this.$refs.tabControl2.currentIndex = index;
      },
      // backClick() {
      //   this.$refs.scroll.scrollTo(0, 0)
      // },
      // contentScroll(position) {
      //   // 1.判断BackTop是否显示
      //   this.isShowBackTop = -(position.y) > 1000
      //   // 2.决定tabControl是否吸顶(position: fixed)
      //   this.isTabFixed = (-position.y) > this.tabOffsetTop
      // },
      loadMore() {
        this.getHomeGoods(this.currentType)

        // this.$refs.scroll.scroll.refresh()
      },
      swiperImageLoad() {
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTap;
      },

      /**
       * 网络请求相关的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // this.result = res
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods('pop', page).then(res => {
          // this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成上拉加载更多
          // this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    /*vh: viewport height*/
    /*height: 100vh;*/
    /*position: relative;*/
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*原生滚动时起作用*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /* 原生滚动的吸顶效果*/
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  /* better-scroll的吸顶效果*/
  /*.tab-control {*/
  /*  position: relative;*/
  /*  z-index: 9;*/
  /*}*/

  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 51px;*/
  /*}*/

  /*.content {*/
  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/

</style>
