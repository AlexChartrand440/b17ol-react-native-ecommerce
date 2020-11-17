import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Text,
  Card,
  CardItem,
  Body,
  Icon,
  Spinner,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';
import {Picker} from '@react-native-picker/picker';

// import actions
import productAction from '../redux/actions/product';

export default function ItemAll({route, navigation}) {
  const dispatch = useDispatch();
  const {sortColumn} = route.params;
  const product = useSelector((state) => state.product);

  const [data, setData] = useState([]);
  const [sort, setSort] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    dispatch(productAction.getAllProducts('', sortColumn, 'desc', 1));

    if (sortColumn === 'rating') {
      setSort('1');
      setSortBy('rating');
    } else if (sortColumn === 'created_at') {
      setSort('2');
      setSortBy('created_at');
    }
  }, [dispatch, sortColumn]);

  useEffect(() => {
    if (product.allProductsData.length > 0) {
      if (product.allProductsPageInfo.currentPage === 1) {
        setData(product.allProductsData);
      } else {
        setData(data.concat(product.allProductsData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.allProductsData, product.allProductsPageInfo.currentPage]);

  function getItemDetail(_id, category_id, category) {
    dispatch(productAction.resetDetailProduct());
    navigation.navigate('Item Detail', {
      id: _id,
      category_id,
      category,
    });
  }

  function loadMore() {
    const nextPage = product.allProductsPageInfo.currentPage + 1;

    if (product.allProductsPageInfo.nextLink) {
      dispatch(productAction.getAllProducts('', sortBy, sortOrder, nextPage));
    }
  }

  function setPicker(value) {
    if (value === '1') {
      setSort('1');
      setSortBy('rating');
      setSortOrder('desc');
      dispatch(productAction.getAllProducts('', 'rating', 'desc', 1));
    } else if (value === '2') {
      setSort('2');
      setSortBy('created_at');
      setSortOrder('desc');
      dispatch(productAction.getAllProducts('', 'created_at', 'desc', 1));
    } else if (value === '3') {
      setSort('3');
      setSortBy('price');
      setSortOrder('asc');
      dispatch(productAction.getAllProducts('', 'price', 'asc', 1));
    } else if (value === '4') {
      setSort('4');
      setSortBy('price');
      setSortOrder('desc');
      dispatch(productAction.getAllProducts('', 'price', 'desc', 1));
    }
  }

  return (
    <Container style={styles.parent}>
      <View style={styles.advFunc}>
        <TouchableOpacity>
          <View style={styles.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Text style={styles.subtitle}> Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.advFuncIcon}>
            <Icon type="MaterialIcons" name="sort" />
            <Picker
              style={styles.pickerSize}
              selectedValue={sort}
              onValueChange={(value) => setPicker(value)}>
              <Picker.Item label="Popular" value="1" />
              <Picker.Item label="Newest" value="2" />
              <Picker.Item label="Price: lowest to high" value="3" />
              <Picker.Item label="Price: high to lowest" value="4" />
            </Picker>
          </View>
        </TouchableOpacity>
      </View>
      {product.allProductsIsLoading && <Spinner color="green" />}
      {/* Product list section */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card style={styles.card}>
            <CardItem cardBody>
              <Image
                source={{uri: `${API_URL}${item.img_thumbnail}`}}
                style={styles.image}
              />
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity
                  onPress={() =>
                    getItemDetail(item.id, item.category_id, item.category)
                  }>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.product}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.price}>
                  Rp
                  {item.price.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')}
                </Text>
                <Text style={styles.subtitle}>{item.store_name}</Text>
                <View style={styles.rating}>
                  {item.rating === 0 &&
                    Array(5).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIconInactive}
                      />,
                    )}
                  {item.rating > 0 &&
                    item.rating < 2 &&
                    Array(1).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIcon}
                      />,
                    )}
                  {item.rating > 0 &&
                    item.rating < 2 &&
                    Array(4).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIconInactive}
                      />,
                    )}
                  {item.rating >= 2 &&
                    item.rating < 3 &&
                    Array(2).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIcon}
                      />,
                    )}
                  {item.rating >= 2 &&
                    item.rating < 3 &&
                    Array(3).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIconInactive}
                      />,
                    )}
                  {item.rating >= 3 &&
                    item.rating < 4 &&
                    Array(3).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIcon}
                      />,
                    )}
                  {item.rating >= 3 &&
                    item.rating < 4 &&
                    Array(2).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIconInactive}
                      />,
                    )}
                  {item.rating >= 4 &&
                    item.rating < 5 &&
                    Array(4).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIcon}
                      />,
                    )}
                  {item.rating >= 4 &&
                    item.rating < 5 &&
                    Array(1).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIconInactive}
                      />,
                    )}
                  {item.rating === 5 &&
                    Array(5).fill(
                      <Icon
                        type="MaterialIcons"
                        name="grade"
                        style={styles.ratingIcon}
                      />,
                    )}
                  <Text style={styles.subtitle}> ({item.count_review})</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
        onEndReached={async () => await loadMore()}
        onEndReachedThreshold={0.01}
      />
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
  pickerSize: {
    height: 24,
    width: 150,
  },
});
