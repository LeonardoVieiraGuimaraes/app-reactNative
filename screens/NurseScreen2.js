import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function NurseScreen2() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Lógica para o primeiro botão
          }}
        >
           <Image
            source={require("../assets/botao_legislacoes.png")} // Caminho para a imagem do botão
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Lógica para o segundo botão
          }}
        >
           <Image
            source={require("../assets/botao_normas_rotinas.png")} // Caminho para a imagem do botão
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Lógica para o terceiro botão
          }}
        >
          <Image
            source={require("../assets/botao_protocolos_saude.png")} // Caminho para a imagem do botão
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Lógica para o quarto botão
          }}
        >
           <Image
            source={require("../assets/botao_nivel_autonomia.png")} // Caminho para a imagem do botão
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Lógica para o terceiro botão
          }}
        >
          <Image
            source={require("../assets/botao_fale_com_dsp.png")} // Caminho para a imagem do botão
            style={styles.buttonImage}
          />
        </TouchableOpacity>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'green',
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around", // Espaçamento igual entre os botões
    width: "100%", // Use a largura total do contêiner
    padding: 10,
    // margin: 5,
    // bottom: 5,
  },
  button: {
    backgroundColor: "green", // Cor de fundo do botão
    // padding: 15,
    // borderRadius: 10,
    borderRadius: 15,
    alignItems: "center",
    flex: 1, // Cada botão recebe a mesma parte da largura disponível
    marginHorizontal: 5, // Margem horizontal entre os botões
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonImage: {
    // width: '100%', // Largura da imagem igual à largura do botão
    // height: '100%', // Altura da imagem igual à altura do botão
    resizeMode: 'contain', // Redimensiona a imagem para caber dentro do espaço do botão
   
  },
});

export default NurseScreen2;
