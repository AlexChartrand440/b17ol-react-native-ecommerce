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

export default function ResetPassword({navigation}) {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password required 6 character')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'New password must match')
      .required('Required field'),
  });

  function resetPassword() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Content padder style={styles.parent}>
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.description}>
          You need to change your password to activate your account
        </Text>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
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
              <Form style={styles.formInput}>
                <Card>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Label>New Password</Label>
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
                <Card>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Label>Confirm New Password</Label>
                        <Input
                          secureTextEntry={true}
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          value={values.confirmPassword}
                        />
                      </Item>
                      {touched.confirmPassword && errors.confirmPassword && (
                        <Text style={styles.error}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </Body>
                  </CardItem>
                </Card>
              </Form>
              <Button rounded block success onPress={handleSubmit}>
                <Text>Reset Password</Text>
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
  description: {
    color: '#F01F0E',
  },
  formInput: {
    marginTop: 16,
    marginBottom: 70,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
