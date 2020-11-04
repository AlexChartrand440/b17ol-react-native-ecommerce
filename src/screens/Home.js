/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Icon,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@env';

// import actions
import productAction from '../redux/actions/product';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(productAction.getPopularProducts());
    dispatch(productAction.getNewProducts());
  }, []);

  function viewCategory() {
    navigation.navigate('Item');
  }

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        {/* New Product Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>New</Text>
            <Text style={styles.subtitle}>You’ve never seen it before!</Text>
          </View>
          <TouchableOpacity onPress={viewCategory}>
            <Text style={styles.subtitle}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {product.newProductsData.length > 0 && product.newProductsData.map(item => {
            return (
              <Card style={styles.card} key={item.id}>
                <CardItem cardBody>
                  <Image source={{ uri: `${API_URL}${item.img_thumbnail}` }} style={styles.image} />
                </CardItem>
                <CardItem>
                  <Body>
                    <TouchableOpacity onPress={getItemDetail}>
                      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>Rp{item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}</Text>
                    <Text style={styles.subtitle}>{item.store_name}</Text>
                    <View style={styles.rating}>
                      {item.rating === 0 && Array(5).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating > 0 && item.rating < 2 && Array(1).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating > 0 && item.rating < 2 && Array(4).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 2 && item.rating < 3 && Array(2).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 2 && item.rating < 3 && Array(3).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 3 && item.rating < 4 && Array(3).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 3 && item.rating < 4 && Array(2).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 4 && item.rating < 5 && Array(4).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 4 && item.rating < 5 && Array(1).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating === 5 && Array(5).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      <Text style={styles.subtitle}>{' '}({item.count_review})</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </ScrollView>

        {/* Popular Product Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Popular</Text>
            <Text style={styles.subtitle}>Find clothes that are trending recently!</Text>
          </View>
          <TouchableOpacity onPress={viewCategory}>
            <Text style={styles.subtitle}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {product.popularProductsData.length > 0 && product.popularProductsData.map(item => {
            return (
              <Card style={styles.card} key={item.id}>
                <CardItem cardBody>
                  <Image source={{ uri: `${API_URL}${item.img_thumbnail}` }} style={styles.image} />
                </CardItem>
                <CardItem>
                  <Body>
                    <TouchableOpacity onPress={getItemDetail}>
                      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>Rp{item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}</Text>
                    <Text style={styles.subtitle}>{item.store_name}</Text>
                    <View style={styles.rating}>
                      {item.rating === 0 && Array(5).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating > 0 && item.rating < 2 && Array(1).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating > 0 && item.rating < 2 && Array(4).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 2 && item.rating < 3 && Array(2).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 2 && item.rating < 3 && Array(3).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 3 && item.rating < 4 && Array(3).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 3 && item.rating < 4 && Array(2).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating >= 4 && item.rating < 5 && Array(4).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      {item.rating >= 4 && item.rating < 5 && Array(1).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIconInactive} />)}
                      {item.rating === 5 && Array(5).fill(<Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />)}
                      <Text style={styles.subtitle}>{' '}({item.count_review})</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </ScrollView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
  },
  subtitle: {
    fontSize: 12,
  },
  card: {
    marginTop: 22,
    marginBottom: 35,
    marginRight: 8,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    width: 150,
  },
  image: {
    resizeMode: 'cover',
    width: 150,
    height: 185,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'green',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    fontSize: 16,
    color: 'orange',
  },
  ratingIconInactive: {
    fontSize: 16,
    color: 'gray',
  },
});
