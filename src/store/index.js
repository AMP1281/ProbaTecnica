import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    finalCommand2:'',
    finalOr:'',
    finalX:'',
    finalY:'',

  },
  mutations: {
    updateFinalCommand2(state, message){
      state.finalCommand2 = message
    },
    updateFinalOr(state, message){
      state.finalOr = message
    },
    updateFinalX(state, message){
      state.finalX = message
    },
    updateFinalY(state, message){
      state.finalY = message
    },
  },

})
