import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const OtherPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página do Luan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
