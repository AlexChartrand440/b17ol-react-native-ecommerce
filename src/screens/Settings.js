/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Switch,
  Item,
  Label,
  Input,
} from 'native-base';

export default function Settings() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Settings</Text>

        {/* Personal Information */}
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.subHeader}>Personal Information</Text>
          <TouchableOpacity>
            <Text style={styles.text}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Full name</Label>
                <Input value="Matilda Brown" disabled />
              </Item>
            </Body>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Date of birth</Label>
                <Input value="04/11/1995" disabled />
              </Item>
            </Body>
          </CardItem>
        </Card>

        {/* Password */}
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.subHeader}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.text}>Change</Text>
          </TouchableOpacity>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Item floatingLabel>
                <Label style={styles.text}>Password</Label>
                <Input value="password" secureTextEntry disabled />
              </Item>
            </Body>
          </CardItem>
        </Card>

        {/* Notification */}
        <Text style={[styles.subHeader, styles.marginBottom]}>Notifications</Text>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>Sales</Text>
          <Switch />
        </View>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>New arrivals</Text>
          <Switch />
        </View>
        <View style={[styles.spaceBetween, styles.marginBottom]}>
          <Text style={styles.text}>Delivery status changes</Text>
          <Switch />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  marginBottom: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 24,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
});
