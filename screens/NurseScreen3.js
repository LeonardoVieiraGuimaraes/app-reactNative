import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o primeiro botão
        }}
      >
        <Text style={styles.buttonText}>RENP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o segundo botão
        }}
      >
        <Text style={styles.buttonText}>LEP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o terceiro botão
        }}
      >
        <Text style={styles.buttonText}>Lei do Exercíio Profissional</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o quarto botão
        }}
      >
        <Text style={styles.buttonText}>PNAISP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Lógica para o quinto botão
        }}
      >
        <Text style={styles.buttonText}>Resolução Carga Horaria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green',
  },
  button: {
    backgroundColor: '#8ECAEF',
    borderWidth: 1, // Largura da borda
    borderColor: 'blue', // Cor da borda
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15, // Espaço entre os botões
    width: '80%', // Use a largura total do contêiner
  },
  buttonText: {
    color: 'black', // Cor do texto do botão
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
