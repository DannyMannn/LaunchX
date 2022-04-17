import { createStore } from 'vuex'

export default createStore({
  state: {
    allCakes:[],
    currentCake: Object
  },
  getters: {
    getCakes: state =>{
      return state.allCakes;
    }
  },
  //modifiy states without promises or without GET/FETCH
  mutations: {
    addCake(state, newCake){
      state.allCakes.push(newCake);
    }
  },
  //for functions with GET/FETCH
  actions: {
  },
  modules: {
  }
})