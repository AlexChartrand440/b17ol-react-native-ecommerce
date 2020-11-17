import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button,
  Spinner,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';

// import actions
import shippingAddressAction from '../redux/actions/shippingAddress';

export default function ShippingAddress({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const shippingAddress = useSelector((state) => state.shippingAddress);

  useEffect(() => {
    dispatch(shippingAddressAction.getAllAddress(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function addShippingAddress() {
    navigation.navigate('Add Shipping Address');
  }

  function updateShippingAddress() {
    navigation.navigate('Update Shipping Address');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>Shipping address</Text>
        {shippingAddress.allAddressIsLoading && <Spinner color="green" />}
        {shippingAddress.allAddressData.length > 0 ? (
          shippingAddress.allAddressData.map((address) => {
            return (
              <Card style={styles.card} key={address.id}>
                <CardItem>
                  <Body>
                    <View style={styles.cardHeader}>
                      <TouchableOpacity>
                        <Text style={[styles.text, styles.bold]}>
                          {address.recipient_name} | {address.recipient_phone}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={updateShippingAddress}>
                        <Text style={[styles.text, styles.bold, styles.link]}>
                          Update
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
          <Text>No data!</Text>
        )}
        <Button
          bordered
          rounded
          block
          dark
          style={styles.button}
          onPress={addShippingAddress}>
          <Text>add new address</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  cardHeader: {
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
  link: {
    color: '#DB3022',
  },
  button: {
    marginTop: 16,
  },
});
