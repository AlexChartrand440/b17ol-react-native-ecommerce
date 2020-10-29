/* eslint-disable prettier/prettier */
import React from 'react';
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

// import dummy product image
import Product from '../assets/img/item1.png';

export default function Home({ navigation }) {
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
          {Array(5).fill(
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
          {Array(5).fill(
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
});
