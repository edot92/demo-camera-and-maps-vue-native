<template>
  <Container :style="{ backgroundColor: '#fff' }">
    <Header>
      <Left>
        <Button transparent :onPress="() => this.props.navigation.navigate('DrawerOpen')">
          <Icon name="menu" />
        </Button>
      </Left>

      <Body>
        <Title>Demo QR Read</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <!-- your content here -->
      <Grid>
        <Row>
          <Button :disabled="!readyCapture" full round style=" flex: 1" :onPress="() => _takePicture()">
            <Text style="color:white;">
              Take Picture
            </Text>
          </Button>
        </Row>
        <Row>
          <rn-camera class="camera-live" ref="myCamera" :type="cameraObj.typeBack" :flashMode="cameraObj.flashModeAuto" permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
            v-bind:on-bar-code-read="_onBarCodeRead"
            >
          </rn-camera>
        </Row>
        <Row>
          <text>
            {{data1}}
          </text>
           <text>
            {{data2}}
          </text>
        </Row>
        <Row v-if="!!myPreviewImg.uri===true">
          <Image style="width: 300;height: 300;" :source="myPreviewImg">
          </Image>
        </Row>
      </Grid>
    </Content>
  </Container>

</template>
<script>
import {
  Icon,
  Title,
  Header,
  Right,
  Body,
  Content,
  Text,
  Container,
  Button,
  Left,
} from 'native-base';
import { RNCamera } from 'react-native-camera';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Image, PermissionsAndroid } from 'react-native';

export default {
  components: {
    Icon,
    Title,
    Col,
    Row,
    Grid,
    Container,
    Text,
    Button,
    Left,
    Content,
    Right,
    Body,
    Header,
    'rn-camera': RNCamera,
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  data() {
    return {
      data1: '',
      data2: '',
      dataonBarCodeRead: null,
      readyCapture: false,
      myPreviewImg: {
        uri: null,
      },
      cameraObj: {
        typeBack: RNCamera.Constants.Type.back,
        flashModeAuto: RNCamera.Constants.FlashMode.auto,
      },
      cameraOptions: {
        flash: 'off',
        zoom: 0,
        autoFocus: 'on',
        depth: 0,
        type: 'back',
        whiteBalance: 'auto',
        ratio: '16:9',
        ratios: [],
        photoId: 1,
        showGallery: false,
        photos: [],
        faces: [],
      },
    };
  },
  watch: {
    // dataonBarCodeRead(param) {
    //   alert('qr found');
    //   console.log(param);
    // },
  },
  mounted() {
    this.requestCameraPermission();
  },
  destroyed() {
    this.$refs.myCamera = null;
  },
  methods: {
    _onBarCodeRead(param1, param2) {
      this.data1 = param1.type;
      this.data2 = param2.data;
    },
    async requestCameraPermission() {
      const thisV = this;
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // console.log("You can use the camera")
          thisV.readyCapture = true;
        } else {
          thisV.readyCapture = false;
          alert('please enable permission camera');
          // console.log("Camera permission denied")
        }
      } catch (err) {
        alert(String(err));
      }
    },
    async _takePicture() {
      if (!!this.$refs.myCamera) {
        console.log('Camera get image');
        const options = {
          fixOrientation: true,
          base64: true,
          width: 300,
          height: 300,
        };
        try {
          this.readyCapture = false;
          const data = await this.$refs.myCamera.takePictureAsync(options);
          if (!!data) {
            this.myPreviewImg = {
              uri: data.uri,
            };
          } else {
            alert('failed get picture');
          }

          this.readyCapture = true;
        } catch (err) {
          this.readyCapture = true;
          alert(String(err));
        }
      } else {
        alert('Camera Not ready');
      }
    },
  },
};
</script>
<style>
.camera-live {
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
}

.view-camera {
  flex: 0;
  flex-direction: row;
  justify-content: center;
}
</style>