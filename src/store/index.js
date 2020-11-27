import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
  state: {
    cart:JSON.parse(localStorage.getItem('cart'))||[]
  },
  mutations: {//申请调取
    addcart(state,item){
      console.log('申请调取')
      let good = state.cart.find(v => v.title == item.title);
      if (good) {
        good.count++;
      } else {
        state.cart.push({ ...item, count: 1 });
      }
    },
    cartadd(state,i){
      state.cart[i].count++
    },
    cartreduce(state,i){
      state.cart[i].count--
    }
  },
  getters:{//相当于组件的computed计算属性
    cartTotal:state=>{
      let sum=0;
      state.cart.forEach(v=>{
        sum+=v.count
      });
      return sum
    }
  },
  actions: {
  },
  modules: {
  },
})
store.subscribe((mutations,state)=>{
  localStorage.setItem('cart',JSON.stringify(state.cart))
})
export default store
