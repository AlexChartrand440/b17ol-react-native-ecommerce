import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
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
import {useDispatch, useSelector} from 'react-redux';

// import actions
import shippingAddressAction from '../redux/actions/shippingAddress';
import cartAction from '../redux/actions/cart';
import orderAction from '../redux/actions/order';

// import logo image
import Logo from '../assets/img/logo.png';

export default function Checkout({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const shippingAddress = useSelector((state) => state.shippingAddress);
  const order = useSelector((state) => state.order);

  const {cartSummary} = cart;
  const delivery = 20000;
  const total = cartSummary + delivery;

  useEffect(() => {
    dispatch(shippingAddressAction.getPrimaryAddress(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function submitOrder(totalPrice, _shippingAddress, orderStatus) {
    const data = {
      totalPrice,
      shippingAddress: _shippingAddress,
      orderStatus,
    };
    dispatch(orderAction.submitOrder(data, auth.token));
  }

  useEffect(() => {
    if (order.isSubmit) {
      cart.cartData.forEach(async (item) => {
        const data = {
          orderId: order.submitData.insertId,
          name: item.name,
          quantity: item.quantity,
          totalPrice: item.quantity * item.price,
          itemId: item.item_id,
          sellerId: item.seller_id,
        };
        await dispatch(orderAction.submitOrderDetail(data, auth.token));
        await dispatch(cartAction.deleteCart(item.item_id, auth.token));
      });
      dispatch(orderAction.resetSubmit());
      dispatch(cartAction.getCustomerCart(auth.token));
      navigation.navigate('Success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart.cartData, dispatch, order.isSubmit, order.submitData.insertId]);

  function changeShippingAddress() {
    navigation.navigate('Shipping Address');
  }

  function addShippingAddress() {
    dispatch(shippingAddressAction.resetAddressData());
    navigation.navigate('Add Shipping Address');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Shipping address</Text>
        {shippingAddress.primaryData ? (
          shippingAddress.primaryData.map((address) => {
            return (
              <Card style={styles.card} key={address.id}>
                <CardItem>
                  <Body>
                    <View style={styles.floatingText}>
                      <Text style={[styles.text, styles.bold]}>
                        {address.recipient_name} | {address.recipient_phone}
                      </Text>
                      <TouchableOpacity onPress={changeShippingAddress}>
                        <Text style={[styles.text, styles.bold, styles.link]}>
                          Change
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>{address.full_address}</Text>
                  </Body>
                </CardItem>
              </Card>
            );
          })
        ) : (
          <View>
            <Text style={styles.text}>Primary shipping address not found!</Text>
            <Button
              small
              bordered
              rounded
              block
              dark
              style={styles.button}
              onPress={addShippingAddress}>
              <Text>add new address</Text>
            </Button>
          </View>
        )}
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
          <Text style={styles.totalPrice}>
            Rp
            {cartSummary &&
              cartSummary.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}
          </Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.totalPrice}>
            Rp
            {cartSummary &&
              delivery.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}
          </Text>
        </View>
        <View style={styles.floatingText}>
          <Text style={styles.text}>Summary</Text>
          <Text style={styles.totalPrice}>
            Rp
            {cartSummary &&
              total.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}
          </Text>
        </View>
        <Button
          rounded
          block
          success
          style={styles.floatingButton}
          onPress={() =>
            submitOrder(total, shippingAddress.primaryData[0].full_address, 1)
          }>
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
  button: {
    marginTop: 16,
    marginBottom: 40,
  },
});
