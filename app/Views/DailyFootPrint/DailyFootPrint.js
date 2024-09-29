import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

const DailyFootPrint = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.headerText}>Add your daily footprint</Text>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.card}>
          <Image source={require('../../assets/lightbulb-2.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Energy</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/car.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Transportation</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/food-16.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Food</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/water.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Water</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/shopping-cart.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Shopping</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/waste.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Waste</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/event.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Events</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../../assets/internet.svg')} style={styles.cardIcon} />
          <Text style={styles.cardText}>Internet</Text>
        </View>
      </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  time: {
    fontFamily: 'SF Pro Text',
    fontWeight: '600',
    fontSize: 14,
  },
  statusIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 5,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    color: '#2f3739',
  },
  mainContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: (Dimensions.get('window').width / 2) - 20,
    height: 140,
    backgroundColor: '#f5f6f7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    color: '#2f3739',
  },
  bottomNav: {
    height: 88,
    padding: 10,
    backgroundColor: '#f5f6f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iphoneIndicator: {
    position: 'absolute',
    bottom: 88,
    width: '100%',
    height: 30,
  },
  menuList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    width: '95%',
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  plusIcon: {
    width: 63,
    height: 55,
  },
  menuText: {
    fontFamily: 'Poppins',
    fontSize: 10,
    color: '#484c52',
  },
});

export default DailyFootPrint;
