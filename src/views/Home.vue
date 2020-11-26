<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    首页
    <el-row>
      <el-col :span="6" v-for="item in goods" :key="item.id">
        <el-card> <img :src="item.img" class="image" /> </el-card>
        <div style="padding: 12px">
          <span>{{ item.title }}</span>
          <el-button>
            <i class="cubeic-add"></i>
          </el-button>
        </div>
      </el-col>
    </el-row>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in goods" :key="item.text">
        {{ index + 1 }}:{{ item.title }}------{{ item.price }}---{{ item.img }}
        <el-button type="primary" @click="addCart(index)">addCart</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default {
  name: 'Home',
  components: {

  },
  methods: {
   async created() {
    let rel = await axios.get("/api/goods");
    this.goods = rel.data.data;
    console.log(rel);
  },
  methods: {
    addCart(i) {
      let item = this.goods[i];
      console.log(item);
      let good = this.cart.find((v) => v.text == item.text);
      console.log(this.cart);
      if (good) {
        this.cart[i].count++;
      } else {
        this.cart.push({ ...item, count: 1 });
      }
    },
  },
  },
}
</script>
