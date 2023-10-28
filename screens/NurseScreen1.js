import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function NurseScreen1() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Área de Enfermagem 1</Text> */}
            {/* Aqui você pode adicionar mais componentes e conteúdo específico */}
            <Image
                source={require('../assets/Tela_inicial.png')} // Caminho para a imagem
                style={styles.image} // Estilo da imagem (opcional)
            />
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
    image: {
        width: '100%', // Largura da imagem
        height: '100%', // Altura da imagem
        marginTop: 0, // Margem superior (opcional)
    },
});

export default NurseScreen1;
