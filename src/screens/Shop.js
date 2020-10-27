/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Text,
} from 'native-base';

export default function Shop() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text>
          This is Shop Section
        </Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
});
