<template>
  <Container>
    <Content class="sidebar-content-wrapper" :bounces="false">
      <image :source="drawerCover" class="drawer-cover" :style="stylesObj.drawerCoverObj" />
      <Text>Your Name</Text>
      <!-- <image :source="drawerImage" class="drawer-image" :style="stylesObj.drawerImageObj"/> -->
      <List>
        <list-item v-for="data in listMenu" :key="data.route" button noBorder :onPress="() => handleListItemClick(data)">
          <Left>
            <Icon active :name="data.icon" :style="{ color: '#777', fontSize: 26, width: 30 }" />
            <Text>
              {{data.name}}
            </Text>
          </Left>
          <Right v-if="data.types" :style="{flex: 1}">
            <Badge class="list-item-badge-container" :style="{backgroundColor: data.bg}">
              <Text class="list-item-badge-text" :style="stylesObj.badgeText">
                {{`${data.types} Types`}}
              </Text>
            </Badge>
          </Right>
        </list-item>
      </List>
    </Content>
  </Container>
</template>

<script>
import { Dimensions, Platform } from 'react-native';
import drawerCover from '../../../assets/drawer-cover.png';
// import drawerImage from "../../../assets/logo-kitchen-sink.png";
import imgProfile from '../../../assets/img/765-default-avatar.png';
import Store from '../../store/index.js';

import {
  ListItem,
  Container,
  Content,
  List,
  Left,
  Icon,
  Text,
  Right,
  Badge,
} from 'native-base';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  props: {
    navigation: {
      type: Object,
    },
  },
  components: {
    'list-item': ListItem,
    Container,
    Content,
    List,
    Left,
    Icon,
    Text,
    Right,
    Badge,
  },
  data: function() {
    return {
      drawerCover: imgProfile,
      // drawerImage: imgProfile,
      stylesObj: {
        drawerCoverObj: {
          height: deviceHeight / 3.5,
          // flex: 1
        },
        // drawerImageObj: {
        //   left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        //   top:
        //     Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        //   resizeMode: "cover"
        // },
        badgeText: {
          fontSize: Platform.OS === 'android' ? 11 : 13,
          marginTop: Platform.OS === 'android' ? -3 : 0,
          fontWeight: '400',
        },
      },
      listMenu: [
        {
          name: 'Home',
          route: 'Home',
          icon: 'home',
          bg: '#ABB444',
        },
        {
          name: 'Camera',
          route: 'Camera',
          icon: 'camera',
          bg: '#ABB444',
        },
        {
          name: 'Map',
          route: 'Map',
          icon: 'ios-map',
          bg: '#ABB444',
        },
        {
          name: 'Qr',
          route: 'Qr',
          icon: 'ios-qr',
          bg: '#ABB444',
        },
        {
          name: 'Logout',
          route: 'logout',
          icon: 'lock',
          bg: 'blue',
        },
      ],
    };
  },
  created() {
    //jika blm melakukan login, redirect ke login
    if (Store.state.user.auth === true) {
      this.navigation.navigate('Login');
    }
  },
  methods: {
    handleListItemClick: function(dataObj) {
      if (dataObj.route === 'logout') {
        // set auth to false
        Store.dispatch('user/setAuth', false);
        // moving to home page
        this.navigation.navigate('Login');
      } else {
        this.navigation.navigate(dataObj.route);
      }
    },
  },
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
}

.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}

.drawer-image {
  align-self: center;
  position: absolute;
  height: 75;
  width: 210;
}

.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}

.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
</style>