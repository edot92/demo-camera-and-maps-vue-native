<template>
    <Container :style="{ backgroundColor: '#fff' }">
        <Header>
            <Left>
                <Button transparent :onPress="() => this.props.navigation.navigate('DrawerOpen')">
                    <Icon name="menu" />
                </Button>
            </Left>

            <Body>
                <Title>Layout</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
            <List>
                <list-item v-for="listItem in listItemArr" :key="listItem.route" button :onPress="() => this.props.navigation.navigate(listItem.route)">
                    <Left>
                        <Text>
                            {{listItem.text}}
                        </Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" class="body-icon-color" />
                    </Right>
                </list-item>
            </List>
        </Content>
    </Container>
</template>

<script>
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
        List,
        Text,
        ListItem
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
            List,
            Text,
            'list-item': ListItem
        },
        data() {
            return {
                listItemArr: [
                    {
                        route: "mapSimpleView",
                        text: "Simple Map View"
                    },
                ]
            };
        }
    };
</script>