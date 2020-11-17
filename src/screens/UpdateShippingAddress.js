import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Body,
  Button,
  Item,
  Label,
  Input,
} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function UpdateShippingAddress() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const schema = Yup.object().shape({
    addressName: Yup.string()
      .max(20, 'Max 20 characters')
      .required('Required field'),
    recipientName: Yup.string()
      .max(50, 'Max 50 characters')
      .required('Required field'),
    recipientPhone: Yup.string()
      .min(10, 'Min 10 characters')
      .max(12, 'Max 12 characters')
      .required('Required field'),
    address: Yup.string()
      .max(255, 'Max 255 characters')
      .required('Required field'),
    postalCode: Yup.string()
      .max(5, 'Max 5 characters')
      .required('Required field'),
  });

  return (
    <Container style={styles.parent}>
      <Formik
        initialValues={{
          addressName: '',
          recipientName: '',
          recipientPhone: '',
          address: '',
          postalCode: '',
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
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>
                      Save address as (ex: home address, office address)
                    </Label>
                    <Input
                      onChangeText={handleChange('addressName')}
                      onBlur={handleBlur('addressName')}
                      value={values.addressName}
                    />
                  </Item>
                  {touched.addressName && errors.addressName && (
                    <Text style={styles.error}>{errors.addressName}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>Recipient's name</Label>
                    <Input
                      onChangeText={handleChange('recipientName')}
                      onBlur={handleBlur('recipientName')}
                      value={values.recipientName}
                    />
                  </Item>
                  {touched.recipientName && errors.recipientName && (
                    <Text style={styles.error}>{errors.recipientName}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>
                      Recipient's telephone number
                    </Label>
                    <Input
                      onChangeText={handleChange('recipientPhone')}
                      onBlur={handleBlur('recipientPhone')}
                      value={values.recipientPhone}
                    />
                  </Item>
                  {touched.recipientPhone && errors.recipientPhone && (
                    <Text style={styles.error}>{errors.recipientPhone}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>Address</Label>
                    <Input
                      onChangeText={handleChange('address')}
                      onBlur={handleBlur('address')}
                      value={values.address}
                    />
                  </Item>
                  {touched.address && errors.address && (
                    <Text style={styles.error}>{errors.address}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Item floatingLabel>
                    <Label style={styles.text}>Postal code</Label>
                    <Input
                      onChangeText={handleChange('postalCode')}
                      onBlur={handleBlur('postalCode')}
                      value={values.postalCode}
                    />
                  </Item>
                  {touched.postalCode && errors.postalCode && (
                    <Text style={styles.error}>{errors.postalCode}</Text>
                  )}
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={styles.picker}>
                  <Text style={styles.text}>Province</Text>
                  <Picker style={styles.pickerSize}>
                    <Picker.Item label="Aceh" value="0" />
                    <Picker.Item label="Sumatera Utara" value="1" />
                    <Picker.Item label="Sumatera Barat" value="2" />
                  </Picker>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={styles.picker}>
                  <Text style={styles.text}>City or subsdistrict</Text>
                  <Picker style={styles.pickerSize}>
                    <Picker.Item label="Aceh" value="0" />
                    <Picker.Item label="Medan" value="1" />
                    <Picker.Item label="Padang" value="2" />
                  </Picker>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={styles.picker}>
                  <Text style={styles.text}>Primary address</Text>
                  <CheckBox
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  />
                </Body>
              </CardItem>
            </Card>
            <Button
              rounded
              block
              success
              style={styles.button}
              onPress={handleSubmit}>
              <Text>save address</Text>
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
    fontSize: 12,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerSize: {
    height: 24,
    width: 128,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
