import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container, Content, Text, Card, Button} from 'native-base';

// import dummy card image
import Dummy from '../assets/img/hp.png';

export default function OrderDetail() {
  return (
    <Container style={styles.parent}>
      <Content style={styles.padding}>
        <View style={[styles.header, styles.marginBottom]}>
          <Text style={[styles.text, styles.bold]}>Order No 1</Text>
          <Text style={styles.text}>05-12-2019</Text>
        </View>
        <View style={[styles.orderStatus, styles.marginBottom]}>
          <Text style={[styles.text, styles.bold, styles.green]}>Not Paid</Text>
        </View>
        <Text style={[styles.text, styles.marginBottom, styles.bold]}>
          3 items
        </Text>
        <Card style={styles.marginBottom}>
          <View style={styles.cardContent}>
            <Image source={Dummy} style={styles.image} />
            <View>
              <Text style={styles.bold}>Item Name</Text>
              <Text style={styles.subtext}>Store Name</Text>
              <Text style={styles.subtext}>Units: 1</Text>
              <Text style={[styles.bold, styles.text]}>Rp120.000</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.marginBottom}>
          <View style={styles.cardContent}>
            <Image source={Dummy} style={styles.image} />
            <View>
              <Text style={styles.bold}>Item Name</Text>
              <Text style={styles.subtext}>Store Name</Text>
              <Text style={styles.subtext}>Units: 1</Text>
              <Text style={[styles.bold, styles.text]}>Rp120.000</Text>
            </View>
          </View>
        </Card>
        <Card style={styles.marginBottom}>
          <View style={styles.cardContent}>
            <Image source={Dummy} style={styles.image} />
            <View>
              <Text style={styles.bold}>Item Name</Text>
              <Text style={styles.subtext}>Store Name</Text>
              <Text style={styles.subtext}>Units: 1</Text>
              <Text style={[styles.bold, styles.text]}>Rp120.000</Text>
            </View>
          </View>
        </Card>
        <Text
          style={[
            styles.text,
            styles.bold,
            styles.marginBottom,
            styles.marginTop,
          ]}>
          Order Information
        </Text>
        <View style={[styles.marginBottom, styles.orderInfo]}>
          <Text style={[styles.text, styles.textLeft]}>Shipping Address:</Text>
          <Text style={[styles.text, styles.textRight]}>
            Jl. Putri Hijau Link IX No. 123 Blok 7 Perum Mandala, Medan,
            Sumatera Utara, 20202
          </Text>
        </View>
        <View style={[styles.marginBottom, styles.orderInfo]}>
          <Text style={[styles.text, styles.textLeft]}>Payment Method:</Text>
          <Text style={[styles.text, styles.textRight]}>Wakkede Payment</Text>
        </View>
        <View style={[styles.marginBottom, styles.orderInfo]}>
          <Text style={[styles.text, styles.textLeft]}>Delivery Method:</Text>
          <Text style={[styles.text, styles.textRight]}>
            Wakkede Express, 2-3 days, Rp20.000
          </Text>
        </View>
        <View style={[styles.marginBottom, styles.orderInfo]}>
          <Text style={[styles.text, styles.textLeft]}>Discount:</Text>
          <Text style={[styles.text, styles.textRight]}>-</Text>
        </View>
        <View style={[styles.marginBottom, styles.orderInfo]}>
          <Text style={[styles.text, styles.textLeft]}>Total Amount:</Text>
          <Text style={[styles.text, styles.textRight]}>Rp99.000</Text>
        </View>
        <View style={[styles.header, styles.marginTop, styles.marginBtn]}>
          <Button bordered rounded dark>
            <Text>{'        Reorder       '}</Text>
          </Button>
          <Button rounded success>
            <Text>Leave Feedback</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  padding: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  text: {
    fontSize: 14,
  },
  subtext: {
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  marginBottom: {
    marginBottom: 12,
  },
  marginTop: {
    marginTop: 16,
  },
  orderInfo: {
    flexDirection: 'row',
    width: '100%',
  },
  textLeft: {
    width: '40%',
  },
  textRight: {
    width: '60%',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 105,
    height: 105,
    resizeMode: 'cover',
    marginRight: 12,
  },
  marginBtn: {
    marginBottom: 40,
  },
});
