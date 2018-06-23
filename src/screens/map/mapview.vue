<template>
    <Container style="flex:1">
        <Header>
            <Left>
                <Button transparent :onPress="() => this.props.navigation.goBack()">
                    <Icon name="arrow-back" />
                </Button>
            </Left>

            <Body>
                <Title>
                    Sample Maps View
                </Title>
            </Body>
            <Right />
        </Header>

        <Content padder style="flex:1">
            <Grid>
                <Row :style="dimensionMaps" >
                    <!-- <view style="flex:1;position:absolute;background: red"> -->
                        <!-- <Text>
                            tes
                        </Text> -->
                        <map-view class="maps-views" :initialRegion="listLocation" />
                    <!-- </view> -->
                </Row>
            </Grid>

        </Content>

    </Container>
</template>

<script>
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Text,
  Button,
  Icon
} from "native-base";
export default {
  components: {
    Col,
    Row,
    Grid,
    Container,
    Header,
    Left,
    Right,
    Body,
    Content,
    Title,
    Text,
    Button,
    Icon,
    "map-view": MapView
  },
  data() {
    return {
      dimensionMaps: {
        width:
          Dimensions.get("window").width -
          Dimensions.get("window").width * 10 / 100,
        height: Dimensions.get("window").height * 30 / 100
      },
      listLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
};
</script>

<style>
.maps-views {
  /* important */
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>