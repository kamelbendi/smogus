import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ username }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi {username}!</Text>
        <Icon name="person-outline" size={24} color="#4CAF50" />
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="flash" size={24} color="#4CAF50" />
          <Text style={styles.cardTitle}>Jordan's Park Guardian</Text>
        </View>
        <Image
          source={require('../../assets/smogus.png')}
          style={styles.mascot}
        />
        <Text style={styles.cardText}>
          So far you tamed Smogus to save the amount of CO2 balanced by 126 trees
        </Text>
        <Text style={styles.progressText}>Your progress this month</Text>
        <Text style={styles.progressValue}>-5% CO2</Text>
        {/* Add progress bar here */}
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Icon name="bulb-outline" size={24} color="#4CAF50" />
          <Text style={styles.statTitle}>Your yearly carbon footprint</Text>
          <Text style={styles.statValue}>6.2 t</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="people-outline" size={24} color="#4CAF50" />
          <Text style={styles.statTitle}>City average</Text>
          <Text style={styles.statValue}>8.2 t/pp</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Icon name="trophy-outline" size={24} color="#4CAF50" />
          <Text style={styles.statTitle}>Your score</Text>
          <Text style={styles.statValue}>1405</Text>
        </View>
        <View style={styles.statCard}>
          <Icon name="trending-down-outline" size={24} color="#4CAF50" />
          <Text style={styles.statTitle}>Your total CO2 Reduction</Text>
          <Text style={styles.statValue}>-14 %</Text>
        </View>
      </View>

      <Text style={styles.chartTitle}>Your footprint timeline</Text>
      <Text style={styles.chartSubtitle}>September 2024</Text>
      <LineChart
        data={{
          labels: ["", "", "", "", "", ""],
          datasets: [{ data: [1, 2, 1.5, 2.5, 1.5, 1] }]
        }}
        width={350}
        height={200}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
          style: { borderRadius: 16 }
        }}
        bezier
        style={styles.chart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  mascot: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  cardText: {
    marginVertical: 8,
  },
  progressText: {
    marginTop: 8,
  },
  progressValue: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    marginHorizontal: 4,
  },
  statTitle: {
    fontSize: 12,
    marginTop: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  chartSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default Home;