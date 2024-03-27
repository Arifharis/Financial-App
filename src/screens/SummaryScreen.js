// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const SummaryScreen = ({ transactions }) => {
//   // Calculate total expenses
//   const totalExpenses = transactions ? transactions.reduce((total, transaction) => total + transaction.amount, 0) : 0;

//   // Calculate total income
//   const totalIncome = transactions ? transactions.reduce((total, transaction) => (transaction.amount > 0 ? total + transaction.amount : total), 0) : 0;

//   // Calculate net income
//   const netIncome = totalIncome - totalExpenses;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Summary</Text>
//       </View>
//       <View style={styles.summaryItem}>
//         <Text style={styles.label}>Income:</Text>
//         <Text style={styles.value}>${totalIncome.toFixed(2)}</Text>
//       </View>
//       <View style={styles.summaryItem}>
//         <Text style={styles.label}>Expenses:</Text>
//         <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
//       </View>
//       <View style={styles.summaryItem}>
//         <Text style={styles.label}>Net Income:</Text>
//         <Text style={styles.value}>${netIncome.toFixed(2)}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     backgroundColor: '#25a585',
//     padding: 10,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   summaryItem: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#55b59d',
//   },
// });

// export default SummaryScreen;


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ transactions }) => {
  // Calculate total expenses
  const totalExpenses = transactions ? transactions.reduce((total, transaction) => total + transaction.amount, 0) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Summary</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.label}>Expenses:</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#25a585',
  },
  summaryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#55b59d',
  },
});

export default SummaryScreen;
