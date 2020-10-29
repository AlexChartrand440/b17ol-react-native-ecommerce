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
} from 'native-base';

// import dummy product image
import Product from '../assets/img/item1.png';

export default function Item({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: 'All Items' });
  }, [navigation]);

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
        {/* Product list section */}
        <View style={styles.productList}>
          {Array(10).fill(
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={Product} style={styles.image} />
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableOpacity onPress={getItemDetail}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>Zalora Muslim Man</Text>
                  </TouchableOpacity>
                  <Text style={styles.price}>Rp149.000</Text>
                  <Text style={styles.subtitle}>Zalora Cloth</Text>
                  <View style={styles.rating}>
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
                    <Text style={styles.subtitle}>{' '}(13)</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
          )}
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
    justifyContent: 'center',
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
