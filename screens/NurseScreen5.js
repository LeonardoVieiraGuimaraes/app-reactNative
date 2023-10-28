import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NurseScreen5() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Área de Enfermagem 1</Text>
      {/* Aqui você pode adicionar mais componentes e conteúdo específico */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green', // Cor de fundo verde para a área de enfermagem 1
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NurseScreen5;
