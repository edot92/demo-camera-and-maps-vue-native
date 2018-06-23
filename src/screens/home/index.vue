<template>
  <Container :style="{ backgroundColor: '#fff' }">
    <Header>
      <Left>
        <Button transparent :onPress="() => this.props.navigation.navigate('DrawerOpen')">
          <Icon name="menu" />
        </Button>
      </Left>

      <Body>
        <Title>Welcome Page</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <!-- konten anda -->
      <text>
        develop liblary react native with Vue style :)
      </text>
    </Content>
  </Container>
</template>

<script>
  import { Dimensions, Platform } from "react-native";
  import Store from "../../store/index.js";
  import {
    Container,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Content,
  } from 'native-base'
  export default {
    components: {
      Container,
      Header,
      Left,
      Button,
      Icon,
      Body,
      Title,
      Right,
      Content,
    },
    props: {
      navigation: {
        type: Object
      }
    },
  };
</script>


<style>
</style>