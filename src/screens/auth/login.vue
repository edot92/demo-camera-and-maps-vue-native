<template>
  <Container>
    <Card>
      <CardItem header>
        <H1>
          LOGIN
        </H1>
      </CardItem>
      <CardItem>

        <Body>
          <Item>
            <Icon active name='person' />
            <Input placeholder='Username' v-model="form.username" />
          </Item>
          <Item>
            <Icon active name='lock' />
            <Input placeholder='Password' v-model="form.password" />
          </Item>
          <Item>
            <Grid>
              <Col :size="10"> </Col>
              <Col :size="80">
              <Button primary rounded block :onPress="() => submitLogin()">
                <Text> Submit </Text>
              </Button>
              </Col>
              <Col :size="10"></Col>
            </Grid>
          </Item>
        </Body>
      </CardItem>
    </Card>
  </Container>
</template>


<script>
  import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Button,
    Card,
    CardItem,
    Body,
    H1
  } from "native-base";
  import { Alert } from "react-native";
  import { Col, Row, Grid } from "react-native-easy-grid";
  import Store from "../../store/index.js";
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    components: {
      Col,
      Row,
      Grid,
      Container,
      Header,
      Content,
      Item,
      Input,
      Icon,
      Button,
      Card,
      CardItem,
      Body,
      H1
    },
    data() {
      return {
        form: {
          password: "demo",
          username: "demo"
        }
      };
    },
    created() {
      //jika sudah melakukan auth, redirect ke homepage
      if (Store.state.user.auth === true) {
        this.navigation.navigate("Home");
      }
    },
    methods: {
      submitLogin() {
        if (this.form.username !== "demo" || this.form.password !== "demo") {
          Alert.alert("Info", "wrong username / password !!!");
          return;
        }
        // set auth
        Store.dispatch("user/setAuth", true);
        // moving to home page
        this.navigation.navigate("Home");
      }
    }
  };
</script>


<style>
</style>