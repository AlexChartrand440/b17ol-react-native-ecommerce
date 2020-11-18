import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Content, Text, Card, CardItem, Body} from 'native-base';

export default function Order() {
  return (
    <Container style={styles.parent}>
      <Content padder>
        <Text style={styles.header}>My Orders</Text>
        <Card style={styles.cardMargin}>
          <CardItem>
            <Body>
              <TouchableOpacity>
                <View style={[styles.cardHeader, styles.marginBottom]}>
                  <Text style={[styles.cardTitle, styles.bold]}>
                    Order No 1
                  </Text>
                  <Text style={styles.text}>05-12-2019</Text>
                </View>
              </TouchableOpacity>
              <View style={[styles.marginBottom, styles.textRow]}>
                <Text style={styles.text}>Quantity: </Text>
                <Text style={[styles.text, styles.bold]}>3</Text>
              </View>
              <View style={[styles.marginBottom, styles.textRow]}>
                <Text style={styles.text}>Total Amount: </Text>
                <Text style={[styles.text, styles.bold]}>Rp120.000</Text>
              </View>
              <View style={styles.cardStatus}>
                <Text style={[styles.text, styles.green, styles.bold]}>
                  Not Paid
                </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
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
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardTitle: {
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  cardStatus: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  marginBottom: {
    marginBottom: 8,
  },
  cardMargin: {
    marginBottom: 16,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
