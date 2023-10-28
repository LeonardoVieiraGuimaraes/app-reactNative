import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity
        onPress={() => {navigation.navigate('Nurse')}}
        style={styles.button}
      >
        <Image
          source={require('../assets/Tela01_02.png')} // Caminho para a imagem do botão
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <Text style={styles.text}>G e A Enfermagem</Text>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent', // Cor de fundo transparente
    padding: 10,
    borderRadius: 10,
  },
  buttonImage: {
    width: 300, // Largura da imagem do botão
    height: 300, // Altura da imagem do botão
  },
});

export default HomeScreen;
