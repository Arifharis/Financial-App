import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionsListScreen = ({ transactions }) => {
  useEffect(() => {
    console.log("Transactions in TransactionsListScreen:", transactions);
  }, [transactions]);
  
  if (!transactions.length) {
    return <View><Text style={styles.emptyListMessage}>No transactions yet.</Text></View>;
  }

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
            <Text style={styles.transactionDate}>Date: {item.date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
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
    color: '#25a585',
    textAlign: 'center',
  },
  list: {
    paddingVertical: 10,
  },
  transactionItem: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#25a585',
    marginBottom: 5,
  },
  transactionDate: {
    fontSize: 14,
    color: '#777',
  },
  emptyListMessage: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default TransactionsListScreen;
