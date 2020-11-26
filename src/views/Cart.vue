<template>
  <div>
    购物车
    <cartinfo :data="cart" @add="onAdd" @reduce="onReduce"></cartinfo>
  </div>
</template>

<script>
import cartinfo from "../components/Cartinfo";
export default {
  name: "Cart",
  data() {
    return {
      cart: [],
    };
  },
  components: {
    cartinfo,
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
