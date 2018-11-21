import * as getters from "./todoApp/getters.js";
import * as mutations from "./todoApp/mutations.js";

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

const state = {
  headerText: "TODO it!",
  todoItems: storage.fetch()
};

// const getters = getters;

// const mutations = mutations;

export default {
  state,
  getters,
  mutations
};
