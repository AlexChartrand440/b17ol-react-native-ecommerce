import React from 'react';
import {StyleSheet, View} from 'react-native';
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
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function Forgot({navigation}) {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 character')
      .required('Required field'),
  });

  function resetPassword(data) {
    console.log(data);
    navigation.navigate('Reset Password');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>Forgot password</Text>
        <Text>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={schema}
          onSubmit={(values) => resetPassword(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <Form>
                <Card style={styles.cardInput}>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                        />
                      </Item>
                      {touched.email && errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                      )}
                    </Body>
                  </CardItem>
                </Card>
              </Form>
              <Button rounded block success onPress={handleSubmit}>
                <Text>Send</Text>
              </Button>
            </View>
          )}
        </Formik>
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
  error: {
    fontSize: 12,
    color: 'red',
  },
});
