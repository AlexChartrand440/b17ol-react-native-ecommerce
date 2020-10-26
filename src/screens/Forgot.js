/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');

  function resetPassword() {
    navigation.navigate('ConfirmPassword');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>
          Forgot password
        </Text>
        <Text>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <Form>
          <Card style={styles.cardInput}>
            <CardItem>
              <Body>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={text => setEmail(text)} />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Form>
        <Button
          rounded
          block
          success
          onPress={resetPassword}
          disabled={(email === '') ? true : false}
        >
          <Text>Send</Text>
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
  cardInput: {
    marginTop: 16,
    marginBottom: 70,
  },
});
