import React from 'react';
import {Container, Item, Input, Icon, Content} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Search({navigation}) {
  return (
    <Container style={styles.parent}>
      <Content>
        <Item style={styles.search}>
          <Input
            placeholder="Search"
            style={[styles.fontSize_14, styles.padding]}
          />
          <TouchableOpacity>
            <Icon type="MaterialIcons" name="search" style={styles.padding} />
          </TouchableOpacity>
        </Item>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F9F9F9',
  },
  search: {
    backgroundColor: '#ffff',
  },
  fontSize_14: {
    fontSize: 14,
  },
  padding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
