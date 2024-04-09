import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionsListScreen = ({ transactions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions List</Text>
      <FlatList
        style={styles.list}
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>Amount: ${item.amount.toFixed(2)}</Text>
            <View style={styles.transactionDateContainer}>
              <Text style={styles.transactionDateLabel}>Date:</Text>
              <Text style={styles.transactionDate}>{formatDate(item.date)}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'column', 
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  transactionAmount: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  transactionDateContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  transactionDateLabel: {
    fontSize: 12,
    color: 'gray',
    marginRight: 5, 
  },
  transactionDate: {
    fontSize: 12,
    color: 'gray',
    fontStyle: 'italic', 
  },
});

export default TransactionsListScreen;
