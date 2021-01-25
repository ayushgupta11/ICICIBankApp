import React from 'react'
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default function CardTwo() {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'Image URL' }} />
                    <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{ uri: 'https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                    </Button>
                </Left>
                <Body>
                    <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                    </Button>
                </Body>
                <Right>
                    <Text>11h ago</Text>
                </Right>
            </CardItem>
        </Card>
    )
}
