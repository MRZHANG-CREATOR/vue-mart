<template>
  <div class="home">
    <el-row>
      <el-col :span="6" v-for="item in goods" :key="item.id" style="border: 1px solid #eee">
        <el-card> <img :src="item.img" class="image" /> </el-card>
        <div style="padding: 12px; margin: 10px">
          <span>{{ item.title }}</span>

          <i class="el-icon-plus" @click="addCart($event, item)"></i>
        </div>
      </el-col>
    </el-row>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="ball.show">
          <div class="inner"><div class="el-icon-plus"></div></div>
        </div>
      </transition>
    </div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in goods" :key="item.text">
        {{ index + 1 }}:{{ item.title }}------{{ item.price }}---{{ item.img }}
        <el-button type="primary">addCart</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      title: "Course list",
      goods: [],
      ball: { show: false },
    };
  },
  async created() {
    let rel = await axios.get("/api/goods");
    this.goods = rel.data.data;
  },
  methods: {
    addCart($event, item) {
      this.ball.el = $event.target;
      this.ball.show = true;
      this.$store.commit("addcart", item);
    },
    beforeEnter(el) {
      //小球移过来
      let dom = this.ball.el;
      let rect = dom.getBoundingClientRect(); //获取左右边距
      let x = window.innerWidth - rect.left - 82;
      let y = rect.top - 25;
      el.style.display = "";
      el.style.transform = `translate3d(0,${y}px,0)`;
      let inner = document.querySelector(".inner");
      inner.style.transform = `translate3d(-${x}px,0,0)`;
    },
    enter(el, done) {
      //飞回去
      // let dom =this.ball.el;
      this._offset = document.body.offsetHeight; //重绘
      el.style.transform = `translate3d(0,0,0)`;
      let inner = el.querySelector(".inner");
      inner.style.transform = `translate3d(0,0,0)`;
      el.addEventListener("transitionend", done);
    },
    afterEnter(el) {
      //清除
      this.ball.show = false;
      el.style.display = "none";
    },
  },
};
</script>
<style>
.ball {
  position: fixed;
  right: 50px;
  top: 25px;
  z-index: 200;
  color: red;
  transition: all 1s linear;
}
.inner {
  transition: all 1s linear;
}
</style>
