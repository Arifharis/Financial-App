import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddTransactionFormScreen = ({ onAddTransaction }) => {
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.random().toString(),
      name: transactionName,
      amount: parseFloat(amount),
      date: date,
    };

    onAddTransaction(newTransaction);

    setTransactionName('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Transaction name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter transaction name"
            value={transactionName}
            onChangeText={setTransactionName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            value={amount}
            onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter date"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#25a585',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#25a585',
    borderRadius: 25,
    paddingVertical: 12,
    marginTop: 20,
    alignSelf: 'center',
    width: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddTransactionFormScreen;
