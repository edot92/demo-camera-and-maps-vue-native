// import { AsyncStorage } from "react-native";

export default {
  namespaced: true,
  state: {
    auth: false
  },
  mutations: {
    setAuth(state, data) {
      // mutate state
      state.auth = data;
    }
  },
  actions: {
    setAuth({ commit }, data) {
      commit("setAuth", data);
    }
  },
  getters: {}
};
