/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import { useDispatch } from 'react-redux';

// import actions
import loginAction from '../redux/actions/auth';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function forgot() {
    navigation.navigate('Forgot');
  }

  function doLogin() {
    const data = {
      email,
      password,
    };
    dispatch(loginAction.login(data));
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>
          Login
        </Text>
        <Form>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={text => setEmail(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} onChangeText={text => setPassword(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
        <TouchableOpacity onPress={forgot} style={styles.login}>
          <Text style={styles.loginLink}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <Button
          rounded
          block
          success
          onPress={doLogin}
          disabled={(email === '' || password === '') ? true : false}
        >
          <Text>Login</Text>
        </Button>
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
    marginBottom: 70,
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 28,
  },
  login: {
    alignItems: 'flex-end',
  },
});
