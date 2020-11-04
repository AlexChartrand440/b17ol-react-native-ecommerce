/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@env';

// import actions
import categoryAction from '../redux/actions/category';

export default function Shop({ navigation }) {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);

  useEffect(() => {
    dispatch(categoryAction.getCategory());
  }, []);

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
        {category.categoryData.length > 0 && category.categoryData.map(item => {
          return (
            <Card style={styles.card} key={item.id}>
              <CardItem style={styles.cardItem}>
                <Body>
                  <TouchableOpacity onPress={getProductByCategory}>
                    <Text style={styles.categoryText}>{item.name}</Text>
                  </TouchableOpacity>
                </Body>
              </CardItem>
              <CardItem cardBody style={styles.cardItem}>
                <Image source={{ uri: `${API_URL}${item.img_url}` }} style={styles.image} />
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
