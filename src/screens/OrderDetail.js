import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container, Content, Text, Card, Button} from 'native-base';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import {API_URL} from '@env';

export default function OrderDetail() {
  const order = useSelector((state) => state.order);
  const {orderDetailData} = order;

  return (
    <Container style={styles.parent}>
      {orderDetailData.length > 0 && (
        <Content style={styles.padding}>
          <View style={[styles.header, styles.marginBottom]}>
            <Text style={[styles.text, styles.bold]}>
              Order No {orderDetailData[0].order_id}
            </Text>
            <Text style={styles.text}>
              {dayjs(orderDetailData[0].created_at).format('DD-MM-YYYY')}
            </Text>
          </View>
          <View style={[styles.orderStatus, styles.marginBottom]}>
            <Text style={[styles.text, styles.bold, styles.green]}>
              {orderDetailData[0].status}
            </Text>
          </View>
          <Text style={[styles.text, styles.marginBottom, styles.bold]}>
            {orderDetailData.length} items
          </Text>
          {orderDetailData.map((item) => {
            return (
              <Card style={styles.marginBottom} key={item.id}>
                <View style={styles.cardContent}>
                  <Image
                    source={{uri: `${API_URL}${item.img_thumbnail}`}}
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.bold}>{item.name}</Text>
                    <Text style={styles.subtext}>{item.store_name}</Text>
                    <Text style={styles.subtext}>Units: {item.quantity}</Text>
                    <Text style={[styles.bold, styles.text]}>
                      Rp
                      {item.item_price
                        .toString()
                        .replace(/(.)(?=(\d{3})+$)/g, '$1.')}
                    </Text>
                  </View>
                </View>
              </Card>
            );
          })}
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
            <Text style={[styles.text, styles.textLeft]}>
              Shipping Address:
            </Text>
            <Text style={[styles.text, styles.textRight]}>
              {orderDetailData[0].shipping_address}
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
            <Text style={[styles.text, styles.textRight]}>
              Rp
              {orderDetailData[0].total_price
                .toString()
                .replace(/(.)(?=(\d{3})+$)/g, '$1.')}
            </Text>
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
      )}
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
