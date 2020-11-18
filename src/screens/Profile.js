import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Spinner,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '@env';

// import default avatar
import User from '../assets/img/avatar.png';

// import actions
import authAction from '../redux/actions/auth';
import profileAction from '../redux/actions/profile';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(profileAction.getProfile(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function getShippingAddress() {
    navigation.navigate('Shipping Address');
  }

  function getSetting() {
    navigation.navigate('Setting');
  }

  function getOrder() {
    navigation.navigate('Order');
  }

  function logout() {
    dispatch(authAction.logout());
  }

  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>My Profile</Text>
        {profile.profileIsLoading && <Spinner color="green" />}
        {profile.profileData &&
          !profile.profileIsError &&
          profile.profileData.map((user) => {
            return (
              <View style={styles.avatar} key={user.id}>
                <Thumbnail
                  source={
                    user.photo_profile === ''
                      ? User
                      : {uri: `${API_URL}${user.photo_profile}`}
                  }
                />
                <View style={styles.personalInfo}>
                  <Text style={styles.fullname}>{user.name}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
              </View>
            );
          })}
        <List>
          <ListItem onPress={getOrder}>
            <Left>
              <Text style={styles.listItemText}>My Orders</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={getShippingAddress}>
            <Left>
              <Text style={styles.listItemText}>Shipping Addresses</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={getSetting}>
            <Left>
              <Text style={styles.listItemText}>Settings</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={logout}>
            <Left>
              <Text style={styles.listItemText}>Logout</Text>
            </Left>
            <Right>
              <Icon type="MaterialIcons" name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  personalInfo: {
    marginLeft: 16,
  },
  fullname: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
