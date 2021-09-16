import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iWidthStore:'',
    iHeightStore:'',
    iXStore:'',
    iYStore:'',
    iOrientationStore:'',
    iComandsStore:'',
  },
  mutations: {
    updateiWidth(state,param){
      state.iWidthStore = param
    },
    updateiHeight(state,param){
      state.iHeightStore = param
    },
    updateiX(state,param){
      state.iXStore = param
    },
    updateiY(state,param){
      state.iYStore = param
    },
    updateiOrientation(state,param){
      state.iOrientationStore = param
    },
  },
  actions: {
 
  },
  modules: {

  }
})
