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
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';

// import actions
import loginAction from '../redux/actions/auth';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 character')
      .required('Required field'),
    password: Yup.string()
      .min(4, 'Password required 4 character')
      .required('Required field'),
  });

  function forgot() {
    navigation.navigate('Forgot');
  }

  function doLogin(values) {
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginAction.login(data));
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>Login</Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={(values) => doLogin(values)}>
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
              <TouchableOpacity onPress={forgot} style={styles.login}>
                <Text style={styles.loginLink}>Forgot your password?</Text>
              </TouchableOpacity>
              <Button rounded block success onPress={handleSubmit}>
                <Text>Login</Text>
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
