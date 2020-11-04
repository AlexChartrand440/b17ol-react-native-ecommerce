/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  Spinner,
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '@env';

// import actions
import productAction from '../redux/actions/product';

export default function Detail({ route, navigation }) {
  const { id, category_id, category } = route.params;
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    navigation.setOptions({ title: category });
    dispatch(productAction.getDetailProduct(id));
    dispatch(productAction.getRelevantProducts(category_id));
  }, [category, category_id, dispatch, id, navigation]);

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        {product.detailProductIsLoading && <Spinner color="green" />}

        {(product.detailProductData.length > 0 && !product.detailProductIsLoading) && product.detailProductData.map(item => {
          return (
            <View>
              {/* Item images */}
              <ScrollView horizontal>
                {item.images.split(',').map((img, i) => {
                  return (
                    <Image source={{ uri: `${API_URL}${img}` }} style={styles.image} key={i} />
                  );
                })}
              </ScrollView>
              {/* Item information & description */}
              <View style={styles.itemInfo}>
                <Text style={[styles.header, styles.price]}>Rp{item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.header}>{item.name}</Text>
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
              </View>
              <View>
                <Text style={styles.bold}>Description</Text>
                <Text style={styles.description}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}

        {/* Relevant item */}
        {product.relevantProductsIsLoading ? <Spinner color="green" /> : <Text style={styles.relevantItem}>You can also like this</Text>}
        <ScrollView horizontal>
          {(product.relevantProductsData.length > 0 && !product.relevantProductsIsLoading) && product.relevantProductsData.map(item => {
            return (
              <Card style={styles.card} key={item.id}>
                <CardItem cardBody>
                  <Image source={{ uri: `${API_URL}${item.img_thumbnail}` }} style={styles.relevantImage} />
                </CardItem>
                <CardItem>
                  <Body>
                    <TouchableOpacity onPress={getItemDetail}>
                      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={[styles.price, styles.description, styles.bold]}>Rp{item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}</Text>
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
      <View style={styles.floatingBar}>
        <Button rounded block success>
          <Text>add to cart</Text>
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
  image: {
    height: 315,
    width: 315,
    resizeMode: 'cover',
    marginRight: 16,
    borderRadius: 12,
  },
  itemInfo: {
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  subtitle: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
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
  relevantItem: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
  },
  card: {
    marginRight: 8,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
    width: 150,
  },
  relevantImage: {
    resizeMode: 'cover',
    width: 150,
    height: 185,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
