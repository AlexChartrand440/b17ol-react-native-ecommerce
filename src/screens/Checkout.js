/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button,
} from 'native-base';
import CheckBox from '@react-native-community/checkbox';

// import logo image
import Logo from '../assets/img/logo.png';

export default function Checkout({ navigation }) {
  function submitOrder() {
    navigation.navigate('Success');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Shipping address</Text>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <View style={styles.floatingText}>
                <Text style={[styles.text, styles.bold]}>Matilda Brown | 081233448833</Text>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.bold, styles.link]}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</Text>
            </Body>
          </CardItem>
        </Card>
        <Text style={styles.header}>Payment</Text>
        <View style={styles.floatingText}>
          <View style={styles.paymentLogo}>
            <Card style={styles.cardLogo}>
              <Image source={Logo} style={styles.logo} />
            </Card>
            <Text style={[styles.text, styles.bold]}>Wakkede Payment</Text>
          </View>
          <CheckBox />
        </View>
      </Content>
      <View style={styles.floatingBar}>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Order</Text>
          <Text style={styles.totalPrice}>Rp949.000</Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.totalPrice}>Rp20.000</Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Summary</Text>
          <Text style={styles.totalPrice}>Rp969.000</Text>
        </View>
        <Button
          rounded
          block
          success
          style={styles.floatingButton}
          onPress={submitOrder}>
          <Text>submit order</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  floatingBar: {
    padding: 16,
    backgroundColor: '#ffff',
  },
  floatingButton: {
    marginTop: 8,
  },
  floatingText: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 50,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  cardLogo: {
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    marginRight: 16,
  },
  link: {
    color: '#DB3022',
  },
  paymentLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 30,
    resizeMode: 'center',
  },
});
