import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
  state () {
    return {
      admin:false,
    }
  },
  getters:{
    getAdminStatus(state){
      return state.admin
    }
  },
  mutations: {
    setAdminStatus (state,status){
      state.admin = status
    }
  },
  actions:{
    
  }
})

export default store