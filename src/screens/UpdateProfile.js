import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
  Thumbnail,
  DatePicker,
} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import dayjs from 'dayjs';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';
import {Formik} from 'formik';
import * as Yup from 'yup';

// import default avatar
import User from '../assets/img/avatar.png';

export default function UpdateProfile() {
  const profile = useSelector((state) => state.profile);
  const {profileData} = profile;

  const schema = Yup.object().shape({
    name: Yup.string().max(50, 'Max 50 character').required('Required field'),
    email: Yup.string()
      .email('Invalid email')
      .max(50, 'Max 50 character')
      .required('Required field'),
    phone: Yup.string()
      .min(10, 'Phone number required 10 character')
      .max(12, 'Phone number required max 12 character')
      .required('Required field'),
  });

  const [birthdate, setBirthdate] = useState(profileData[0].birthday);

  return (
    <Container style={styles.parent}>
      <Content padder>
        <View style={styles.uploadImage}>
          <TouchableOpacity>
            <Thumbnail
              large
              source={
                profileData[0].photo_profile === ''
                  ? User
                  : {uri: `${API_URL}${profileData[0].photo_profile}`}
              }
            />
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={{
            name: profileData[0].name,
            email: profileData[0].email,
            phone: profileData[0].phone,
            gender: profileData[0].gender === 'Man' ? 1 : 2,
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
              <Card style={styles.card}>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label style={styles.text}>Full name</Label>
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
              <Card style={styles.card}>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label style={styles.text}>Email</Label>
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
              <Card style={styles.card}>
                <CardItem>
                  <Body>
                    <Item floatingLabel>
                      <Label style={styles.text}>Phone number</Label>
                      <Input
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                      />
                    </Item>
                    {touched.phone && errors.phone && (
                      <Text style={styles.error}>{errors.phone}</Text>
                    )}
                  </Body>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem>
                  <Body style={styles.picker}>
                    <Text style={styles.text}>Gender</Text>
                    <Picker
                      style={styles.pickerSize}
                      selectedValue={values.gender}
                      onValueChange={handleChange('gender')}>
                      <Picker.Item label="Man" value="1" />
                      <Picker.Item label="Woman" value="2" />
                    </Picker>
                  </Body>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem>
                  <Body style={styles.picker}>
                    <Text style={styles.text}>Date of birth</Text>
                    <DatePicker
                      defaultDate={
                        new Date(dayjs(birthdate).format('MM/DD/YYYY'))
                      }
                      minimumDate={new Date(1900, 1, 1)}
                      maximumDate={new Date()}
                      locale={'en'}
                      modalTransparent={false}
                      animationType={'fade'}
                      androidMode={'default'}
                      onDateChange={(date) => setBirthdate(date)}
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
                <Text>save profile</Text>
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
  uploadImage: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerSize: {
    height: 24,
    width: 100,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
});
