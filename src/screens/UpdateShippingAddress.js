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
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';

export default function UpdateShippingAddress() {
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
            <Body style={styles.picker}>
              <Text style={styles.text}>Province</Text>
              <Picker style={styles.pickerSize}>
                <Picker.Item label="Aceh" value="0" />
                <Picker.Item label="Sumatera Utara" value="1" />
                <Picker.Item label="Sumatera Barat" value="2" />
              </Picker>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body style={styles.picker}>
              <Text style={styles.text}>City or subsdistrict</Text>
              <Picker style={styles.pickerSize}>
                <Picker.Item label="Aceh" value="0" />
                <Picker.Item label="Medan" value="1" />
                <Picker.Item label="Padang" value="2" />
              </Picker>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body style={styles.picker}>
              <Text style={styles.text}>Primary address</Text>
              <CheckBox />
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
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerSize: {
    height: 24,
    width: 128,
  },
});
