/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  List,
  ListItem,
  Left,
  Right,
  Icon,
} from 'native-base';

import User from '../assets/img/avatar.png';

export default function Profile({ navigation }) {
  function getShippingAddress() {
    navigation.navigate('Shipping Address');
  }

  function getSetting() {
    navigation.navigate('Setting');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>
          My Profile
        </Text>
        <View style={styles.avatar}>
          <Thumbnail source={User} />
          <View style={styles.personalInfo}>
            <Text style={styles.fullname}>Matilda Brown</Text>
            <Text style={styles.email}>matildabrown@mail.com</Text>
          </View>
        </View>
        <List>
          <ListItem>
            <Left>
              <Text style={styles.listItemText}>My Orders</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={getShippingAddress}>
            <Left>
              <Text style={styles.listItemText}>Shipping Addresses</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={getSetting}>
            <Left>
              <Text style={styles.listItemText}>Settings</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={styles.listItemText}>Logout</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
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
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  personalInfo: {
    marginLeft: 16,
  },
  fullname: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
