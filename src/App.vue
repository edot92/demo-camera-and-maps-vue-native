<template>
  <root v-if="isAppReady===false">
    <view :style="{flex: 1, height: 50, backgroundColor: 'white'}" />
    <view :style="{flex: 1, height: 100, backgroundColor: 'white',justifyContent: 'center',alignItems: 'center'}">
      <Spinner color='green' />
      <H2>
        Loading !!!
      </H2>
    </view>
    <view :style="{flex: 1, height: 150, backgroundColor: 'white'}" />
  </root>
  <root v-else>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import React from 'react';
import { AsyncStorage } from 'react-native';

// import ui
import { StackNavigator, DrawerNavigator } from 'vue-native-router';
import { Root, Container, Spinner, H2 } from 'native-base';
// sidebar render
import SideBarScreen from './screens/sidebar/index.vue';
// import vuex
import Store from './store/index.js';
// import drawer
import HomeScreen from './screens/home/index.vue';
import LoginScreen from './screens/auth/login.vue';
import CameraScreen from './screens/camera/index.vue';
import MapScreen from './screens/map/index.vue';
import QrScreen from './screens/qrcode/index.vue';
// import stack
import StackSimpleMapView from './screens/map/mapview.vue';
const Drawer = DrawerNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Camera: { screen: CameraScreen },
    Map: { screen: MapScreen },
    Qr: { screen: QrScreen },
  },
  {
    initialRouteName: 'Qr', //default Login
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => {
      // console.log("props inside contentComponent", props);
      return <SideBarScreen {...props} />;
    },
  }
);
const AppNavigation = StackNavigator(
  {
    Drawer: { screen: Drawer },
    mapSimpleView: {
      screen: StackSimpleMapView,
    },
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  }
);
export default {
  data() {
    return {
      isAppReady: false,
    };
  },
  components: {
    root: Root,
    'app-navigation': AppNavigation,
    Container,
    Spinner,
    H2,
  },
  mounted() {
    this.cekStatusAuth();
  },
  methods: {
    cekStatusAuth() {
      const thisV = this;
      let timeout = setTimeout(() => {
        thisV.isAppReady = true;
        alert('timeout reading storage');
      }, 3000);
      AsyncStorage.getItem('user:auth')
        .then(value => {
          if (!!value === true) {
            // user has been login
            Store.dispatch('user/setAuth', true);
          } else {
            Store.dispatch('user/setAuth', false);
          }
          thisV.isAppReady = true;
          clearTimeout(timeout);
        })
        .catch(err => {
          clearTimeout(timeout);
          thisV.isAppReady = true;
          alert(String(err));
        });
    },
  },
};
</script>