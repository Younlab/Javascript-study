import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp.js";

// import * as getters from "./getters.js";
// import * as mutations from "./mutations";
// Vue를 사용하는 모든 영역에 햐당 플러그인을 추가한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
});
