<template>
  <div>
    购物车
    <Cartinfo></Cartinfo>
  </div>
</template>

<script>
import Cartinfo from "../components/Cartinfo";
// import {mapState} from "vuex"//把vuex的状态映射到本地
export default {
  components: {
    Cartinfo ,
  },
  mounted () {
   console.log(111);
 },
  methods: {
    onAdd(arg) {
      let { index } = arg;
      this.cart[index].count++;
    },
    onReduce(arg) {
      let { index } = arg;
      if (this.cart[index].count > 1) {
        this.cart[index].count--;
      }
    },
  },
};
</script>

<style></style>
