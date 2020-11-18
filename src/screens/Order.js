import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Card, CardItem, Body} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';

// import actions
import orderAction from '../redux/actions/order';

export default function Order({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(orderAction.getOrder(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function getOrderDetail(id) {
    dispatch(orderAction.getOrderDetail(id, auth.token));
    navigation.navigate('Order Details');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>My Orders</Text>
        {order.orderIsError && <Text>No data!</Text>}
        {order.orderData.length > 0 &&
          order.orderData.map((item) => {
            return (
              <Card style={styles.cardMargin} key={item.id}>
                <CardItem>
                  <Body>
                    <TouchableOpacity onPress={() => getOrderDetail(item.id)}>
                      <View style={[styles.cardHeader, styles.marginBottom]}>
                        <Text style={[styles.cardTitle, styles.bold]}>
                          Order No {item.id}
                        </Text>
                        <Text style={styles.text}>
                          {dayjs(item.created_at).format('DD-MM-YYYY')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View style={[styles.marginBottom, styles.textRow]}>
                      <Text style={styles.text}>Quantity: </Text>
                      <Text style={[styles.text, styles.bold]}>
                        {item.quantity}
                      </Text>
                    </View>
                    <View style={[styles.marginBottom, styles.textRow]}>
                      <Text style={styles.text}>Total Amount: </Text>
                      <Text style={[styles.text, styles.bold]}>
                        Rp
                        {item.total_price
                          .toString()
                          .replace(/(.)(?=(\d{3})+$)/g, '$1.')}
                      </Text>
                    </View>
                    <View style={styles.cardStatus}>
                      <Text style={[styles.text, styles.green, styles.bold]}>
                        {item.status}
                      </Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  cardStatus: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  marginBottom: {
    marginBottom: 8,
  },
  cardMargin: {
    marginBottom: 16,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
