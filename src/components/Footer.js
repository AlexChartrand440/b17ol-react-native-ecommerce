/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import { StyleSheet } from 'react-native';

export default function ScreenFooter() {
  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.footer}>
        <Button vertical>
          <Icon type="FontAwesome" name="home" style={styles.iconActive} />
          <Text style={styles.iconActive}>Home</Text>
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="shopping-cart" style={styles.icon} />
          <Text style={styles.icon}>Shop</Text>
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="shopping-bag" style={styles.icon} />
          <Text style={styles.icon}>Bag</Text>
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="user" style={styles.icon} />
          <Text style={styles.icon}>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  icon: {
    color: '#222222',
  },
  iconActive: {
    color: 'green',
  },
});
