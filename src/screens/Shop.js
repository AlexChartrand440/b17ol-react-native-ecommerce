/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';

// import dummy category image
import Category from '../assets/img/hp.png';

export default function Shop({navigation}) {
  function getProductByCategory() {
    navigation.navigate('Item');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Button
          rounded
          block
          success
          style={styles.button}
          onPress={getProductByCategory}>
          <Text>View All Items</Text>
        </Button>
        <Text style={styles.header}>Choose category</Text>

        {/* Category card section */}
        {Array(5).fill(
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <TouchableOpacity onPress={getProductByCategory}>
                  <Text style={styles.categoryText}>Smartphone</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem cardBody style={styles.cardItem}>
              <Image source={Category} style={styles.image} />
            </CardItem>
          </Card>
        )}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    marginBottom: 16,
    marginTop: 0,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardItem: {
    width: '50%',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
  },
});
