import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EditarPerfil() {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>

            {/* Cabeçalho fixo */}
            <View style={styles.top}>
                <Text style={styles.title}>Editar Perfil</Text>
            </View>

            {/* Somente esta parte rola */}
            <ScrollView contentContainerStyle={styles.content}>
                <Text>Nome</Text>
                <View style={styles.input} />

                <Text>Email</Text>
                <View style={styles.input} />

                <Text>Telefone</Text>
                <View style={styles.input} />

                <Text>Endereço</Text>
                <View style={styles.input} />

                <Text>Outras informações</Text>
                <View style={styles.input} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        backgroundColor: '#20B77A',
        height: 200,
        width: '100%',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        marginTop: 20,
        padding: 20,
        paddingBottom: 40,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 20,
    },
});