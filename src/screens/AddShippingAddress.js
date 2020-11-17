import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
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
import {useDispatch, useSelector} from 'react-redux';

// import actions
import shippingAddressAction from '../redux/actions/shippingAddress';

export default function AddShippingAddress({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [province, setProvince] = useState(1);
  const [city, setCity] = useState(1);
  const [cityByProvince, setCityByProvince] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const shippingAddress = useSelector((state) => state.shippingAddress);

  useEffect(() => {
    dispatch(shippingAddressAction.getProvinces());
    dispatch(shippingAddressAction.getCities());
  }, [dispatch]);

  useEffect(() => {
    if (shippingAddress.provincesData && shippingAddress.citiesData) {
      const data = shippingAddress.citiesData.filter(
        (_city) => _city.province_id === province,
      );
      setCityByProvince(data);
    }
  }, [shippingAddress.provincesData, shippingAddress.citiesData, province]);

  useEffect(() => {
    if (shippingAddress.isAdd) {
      Alert.alert('Add shipping address success');
      dispatch(shippingAddressAction.resetAdd());
      dispatch(shippingAddressAction.getAllAddress(auth.token));
      navigation.navigate('Shipping Address');
    }
  });

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

  function doAddShippingAddress(values, _city) {
    const data = {
      ...values,
      city: _city,
      primaryAddress: toggleCheckBox,
    };
    dispatch(shippingAddressAction.addShippingAddress(data, auth.token));
  }

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
        onSubmit={(values) => doAddShippingAddress(values, city)}>
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
                  <Picker
                    style={styles.pickerSize}
                    selectedValue={province}
                    onValueChange={(value) => setProvince(value)}>
                    {shippingAddress.provincesData.length > 0 &&
                      shippingAddress.provincesData.map((_province) => {
                        return (
                          <Picker.Item
                            label={_province.name}
                            value={_province.id}
                            key={_province.id}
                          />
                        );
                      })}
                  </Picker>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body style={styles.picker}>
                  <Text style={styles.text}>City or subsdistrict</Text>
                  <Picker
                    style={styles.pickerSize}
                    selectedValue={city}
                    onValueChange={(value) => setCity(value)}>
                    {cityByProvince.length > 0 &&
                      cityByProvince.map((_city) => {
                        return (
                          <Picker.Item
                            label={_city.name}
                            value={_city.id}
                            key={_city.id}
                          />
                        );
                      })}
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
