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
} from 'native-base';

// import dummy product image
import Product from '../assets/img/item1.png';

export default function Detail({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: 'Category Name' });
  }, [navigation]);

  function getItemDetail() {
    navigation.navigate('Item Detail');
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        {/* Item image */}
        <ScrollView horizontal>
          {Array(5).fill(
            <Image source={Product} style={styles.image} />
          )}
        </ScrollView>

        {/* Item information & description */}
        <View style={styles.itemInfo}>
          <Text style={[styles.header, styles.price]}>Rp149.000</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.header}>Zalora Muslim Man</Text>
          <Text style={styles.subtitle}>Zalora Cloth</Text>
          <View style={styles.rating}>
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Icon type="MaterialIcons" name="grade" style={styles.ratingIcon} />
            <Text style={styles.subtitle}>{' '}(13)</Text>
          </View>
        </View>
        <View>
          <Text style={styles.bold}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.
          </Text>
        </View>

        {/* Relavant item */}
        <Text style={styles.relevantItem}>You can also like this</Text>
        <ScrollView horizontal>
          {Array(5).fill(
            <Card style={styles.card}>
              <CardItem cardBody>
                <Image source={Product} style={styles.relevantImage} />
              </CardItem>
              <CardItem>
                <Body>
                  <TouchableOpacity onPress={getItemDetail}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.product}>Zalora Muslim Man</Text>
                  </TouchableOpacity>
                  <Text style={[styles.price, styles.description, styles.bold]}>Rp149.000</Text>
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
