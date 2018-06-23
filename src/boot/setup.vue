<template>
  <!-- <view v-if="!isAppReady" class="container">
    <view :style="{flex: 1, height: 50, backgroundColor: 'white'}" />
    <view :style="{flex: 1, height: 100, backgroundColor: 'white',justifyContent: 'center',alignItems: 'center'}">
      <Spinner color='green' />
      <H2>
        Loading !!!
      </H2>
    </view>
    <view :style="{flex: 1, height: 150, backgroundColor: 'white'}" />
  </view>
  <view v-else class="container"> -->
  <app></app>
  <!-- </view> -->
</template>


<script>
  import Vue from "vue-native-core";
  import { StackNavigator } from "vue-native-router";
  // import { VueNativeBase } from "native-base";
  // import { Container, Header, Content, Spinner, H2 } from "native-base";

  import App from "../App.vue";
  // import Store from "../store/index.js";

  // registering all native-base components to the global scope of the Vue
  // Vue.use(VueNativeBase);
  // register global vuex
  // Vue.use(Store);

  export default {
    components: { App },
    data: function () {
      return {
        // isAppReady: false
      };
    },
    created: function () {
      // const thisV = this;
      // setTimeout(() => {
      //   thisV.isAppReady = true;
      // }, 1000);
    },
    methods: {}
  };
</script>

<style>
  .container {
    flex: 1;
  }
</style>