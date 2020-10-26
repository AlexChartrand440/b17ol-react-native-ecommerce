/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
} from 'native-base';

// import components
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text>
          This is Content Section
        </Text>
      </Content>
      <Footer />
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
});
