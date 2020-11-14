import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
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

export default function Signup({navigation}) {
  const schema = Yup.object().shape({
    name: Yup.string().max(50, 'Max 50 character').required('Required field'),
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 character')
      .required('Required field'),
    password: Yup.string()
      .min(6, 'Password required 6 character')
      .required('Required field'),
  });

  function login() {
    navigation.navigate('Login');
  }

  function doSignup() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>Sign up</Text>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={(values) => console.log(values)}>
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
                <Card>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Label>Name</Label>
                        <Input
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                        />
                      </Item>
                      {touched.name && errors.name && (
                        <Text style={styles.error}>{errors.name}</Text>
                      )}
                    </Body>
                  </CardItem>
                </Card>
                <Card>
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
                <Card>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                          secureTextEntry={true}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                        />
                      </Item>
                      {touched.password && errors.password && (
                        <Text style={styles.error}>{errors.password}</Text>
                      )}
                    </Body>
                  </CardItem>
                </Card>
              </Form>
              <TouchableOpacity onPress={login} style={styles.login}>
                <Text style={styles.loginLink}>Already have an account?</Text>
              </TouchableOpacity>
              <Button rounded block success onPress={handleSubmit}>
                <Text>Sign Up</Text>
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
  loginLink: {
    marginTop: 16,
    marginBottom: 28,
  },
  login: {
    alignItems: 'flex-end',
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
