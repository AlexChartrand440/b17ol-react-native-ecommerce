import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function UpdatePassword() {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password required 6 character')
      .required('Required field'),
    newPassword: Yup.string()
      .min(6, 'Password required 6 character')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'New password must match')
      .required('Required field'),
  });

  return (
    <Container style={styles.parent}>
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
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
          <Content padder>
            <Card style={styles.card}>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>Old Password</Label>
                    <Input
                      secureTextEntry
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
            <Card style={styles.card}>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>New Password</Label>
                    <Input
                      secureTextEntry
                      onChangeText={handleChange('newPassword')}
                      onBlur={handleBlur('newPassword')}
                      value={values.newPassword}
                    />
                  </Item>
                  {touched.newPassword && errors.newPassword && (
                    <Text style={styles.error}>{errors.newPassword}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.card}>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>Repeat New Password</Label>
                    <Input
                      secureTextEntry
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                  </Item>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Button
              rounded
              block
              success
              style={styles.button}
              onPress={handleSubmit}>
              <Text>save password</Text>
            </Button>
          </Content>
        )}
      </Formik>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  button: {
    marginTop: 16,
  },
  text: {
    fontSize: 14,
  },
  card: {
    marginBottom: 16,
    borderWidth: 0,
    borderColor: 'white',
    elevation: 2,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
