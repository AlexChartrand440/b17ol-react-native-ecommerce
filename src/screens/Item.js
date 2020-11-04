/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
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
  Spinner,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@env';

// import actions
import productAction from '../redux/actions/product';

export default function Item({ route, navigation }) {
  const { id, title } = route.params;
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    navigation.setOptions({ title: title });
    dispatch(productAction.getProductByCategory(id));
  }, [dispatch, id, navigation, title]);

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  return (
    <Container style={styles.parent}>
      <View style={styles.advFunc}>
        <TouchableOpacity>
          <View style={styles.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Text style={styles.subtitle}>{' '}Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Text style={styles.subtitle}>{' '}Price: lowest to high</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Content padder>
        {product.productByCategoryIsLoading && <Spinner color="green" />}
        {/* Product list section */}
        <View style={styles.productList}>
          {(product.productByCategoryData.length > 0 && !product.productByCategoryIsLoading) && product.productByCategoryData.map(item => {
            return (
              <Card style={styles.card}>
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
          {(product.productByCategoryData.length === 0 && product.productByCategoryIsError) && <Text>No item!</Text>}
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  card: {
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    width: '47%',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  subtitle: {
    fontSize: 12,
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
  advFunc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    backgroundColor: '#ffff',
  },
  advFuncIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});
