/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Icon,
  Button,
  Spinner,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@env';

// import actions
import cartAction from '../redux/actions/cart';

export default function Bag({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(cartAction.getCustomerCart(auth.token));
  }, [auth.token, dispatch]);

  function checkout() {
    navigation.navigate('Checkout');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>My Bag</Text>
        {cart.cartIsLoading && <Spinner color="green" />}
        {(cart.cartData && !cart.cartIsLoading) ? cart.cartData.map(item => {
          return (
            <Card style={styles.card} key={item.item_id}>
              <CardItem cardBody style={styles.cardImage}>
                <Image source={{ uri: `${API_URL}${item.img_thumbnail}` }} style={styles.image} />
              </CardItem>
              <CardItem style={styles.cardContent}>
                <Body>
                  <View style={[styles.cardHeader, styles.contentMargin]}>
                    <View>
                      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.cardTitle}>{item.name}</Text>
                      <Text style={styles.cardSubtitle}>{item.store_name}</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon
                          type="MaterialIcons"
                          name="delete"
                          style={styles.delete}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cardHeader}>
                    <View style={styles.card}>
                      <TouchableOpacity style={styles.counterButton} disabled={item.quantity === 1 ? true : false}>
                        <Icon
                          type="MaterialIcons"
                          name="remove"
                          style={styles.counterIcon}
                        />
                      </TouchableOpacity>
                      <Text style={styles.counterText}>
                        {'  '}{item.quantity}{'  '}
                      </Text>
                      <TouchableOpacity style={styles.counterButton}>
                        <Icon
                          type="MaterialIcons"
                          name="add"
                          style={styles.counterIcon}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={[styles.counterText, styles.priceText]}>
                      Rp{item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          );
        }) : <Text>No Item!</Text>}
      </Content>
      {(cart.cartData && !cart.cartIsLoading) && (
        <View style={styles.floatingBar}>
          <View style={styles.cardHeader}>
            <Text style={styles.counterText}>Total amount</Text>
            <Text style={styles.totalPrice}>Rp{cart.cartSummary.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}</Text>
          </View>
          <Button
            rounded
            block
            success
            style={styles.floatingButton}
            onPress={checkout}>
            <Text>Checkout</Text>
          </Button>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 105,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '30%',
  },
  cardContent: {
    width: '70%',
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    color: '#DB3022',
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 150,
  },
  cardSubtitle: {
    fontSize: 12,
  },
  counterButton: {
    height: 36,
    width: 36,
    backgroundColor: '#ffff',
    elevation: 2,
    borderRadius: 100,
  },
  counterIcon: {
    alignSelf: 'center',
    paddingTop: 4,
  },
  counterText: {
    fontSize: 14,
  },
  priceText: {
    color: 'green',
    fontWeight: 'bold',
  },
  contentMargin: {
    marginBottom: 6,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  floatingBar: {
    padding: 16,
    backgroundColor: '#ffff',
  },
  floatingButton: {
    marginTop: 16,
  },
});
