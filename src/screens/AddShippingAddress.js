/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button,
  Item,
  Label,
  Input,
} from 'native-base';

export default function AddShippingAddress() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Save address as (ex: home address, office address)</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Recipient's name</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Recipient's telephone number</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Address</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Postal code</Label>
                <Input />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              
            </Body>
          </CardItem>
        </Card>
        <Button rounded block success style={styles.button}>
          <Text>save address</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  button: {
    marginTop: 16,
  },
  text: {
    fontSize: 12,
  },
});
