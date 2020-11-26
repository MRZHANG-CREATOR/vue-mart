<template>
    <div>
<table border="0" cellpadding="1" bgcolor="#00CCCC">
      <tr>
      <td>课程名称</td>
      <td>课程单价</td>
      <td>课程数量</td>
      <td>课程总价</td>
      <td>课程操作</td></tr>
      <tr v-for="(item,index) in data" :key="item.text">
      <td>{{item.text}}</td>
      <td>{{item.price}}</td>
      <td>{{item.count}}</td>
      <td>{{item.count*item.price}}</td>
      <td><button @click="add(index)">+</button><button @click="reduce(index)">-</button></td></tr> 
       <p>共{{total}}元</p>
    </table>
      
    </div>
</template>
<script>
    export default {
        name:'Cart',
        props:['data'],
        computed: {
            total() {
                return this.data.reduce((sum,v)=>{
                      return sum+v.count*v.price
                },0) 
            }
        },
        methods: {
            add(i) {
                // this.data[i].count++
                this.$emit('add',{index:i})
            },
            reduce(i){
                // this.data[i].count--
                this.$emit('reduce',{index:i})
            }
        },
    }
</script>

<style >

</style>