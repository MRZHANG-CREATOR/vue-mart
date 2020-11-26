<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item index="1">
            <img width="100px" src="https://img.kaikeba.com/70350130700202jusm.png" alt="" />
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/">课程首页</router-link>
          </el-menu-item>
          <el-menu-item index="3" style="float: right">
            <router-link to="/Cart">
              <i class="el-icon-shopping-cart-1"></i>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import axios from "axios";
// import Home from '../views/Home.vue';
// import Cart from '../views/Cart.vue';
Vue.use(ElementUI);
export default {
  components: {},
  data() {
    return {
      title: "Course list",
      goods: [],
      cart: [],
    };
  },
  
};
</script>

<style>
h1 {
  color: red;
}
li {
  list-style-type: none;
}
.image {
  width: 100%;
}
</style>
