<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

=======
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5

export default function HomeScreen() {
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="light" />

<<<<<<< HEAD

=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
            {/* CABEÇALHO */}
            <View style={styles.headerHome}>
                <Text style={styles.headerTitulo}>Página Inicial</Text>
                <Text style={styles.headerSubtitulo}>Aluno</Text>
            </View>

<<<<<<< HEAD

=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
            {/* CONTEÚDO */}
            <ScrollView
                style={styles.homeScroll}
                contentContainerStyle={styles.homeContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.tituloLinha}>
<<<<<<< HEAD
                    <Text style={styles.minhasManifestacoes}>manifestações</Text>
                            <TouchableOpacity style={styles.botaoNova}>
                        <Text style={styles.botaoNovaTexto}>＋ Nova Manifestação</Text>
                    </TouchableOpacity>
                </View>


=======
                    <Text style={styles.minhasManifestacoes}>Minhas manifestações</Text>
                    <TouchableOpacity style={styles.botaoNova}>
                        <Text style={styles.botaoNovaTexto}>＋ Nova</Text>
                    </TouchableOpacity>
                </View>

>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
                {/* MANIFESTAÇÃO 1 */}
                <View style={styles.card}>
                    <View style={styles.cardTopo}>
                        <Text style={styles.cardTitulo}>Problemas na Biblioteca</Text>
                        <View style={styles.statusAndamento}>
                            <Text style={styles.statusAndamentoTexto}>Em andamento</Text>
                        </View>
                    </View>
                    <Text style={styles.cardDescricao}>
                        A biblioteca está com falta de livros de matemática do ensino médio.
                    </Text>
                    <View style={styles.cardRodape}>
                        <Text style={styles.tipoReclamacao}>Reclamação</Text>
                        <Text style={styles.protocolo}>OUV-2026-001234</Text>
                    </View>
                </View>

<<<<<<< HEAD

=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
                {/* MANIFESTAÇÃO 2 */}
                <View style={styles.card}>
                    <View style={styles.cardTopo}>
                        <Text style={styles.cardTitulo}>Sugestão de Horta Escolar</Text>
                        <View style={styles.statusRecebida}>
                            <Text style={styles.statusRecebidaTexto}>Recebida</Text>
                        </View>
                    </View>
                    <Text style={styles.cardDescricao}>
                        Sugiro a criação de uma horta comunitária para aulas práticas de biologia e conscientização ambiental.
                    </Text>
                    <View style={styles.cardRodape}>
                        <Text style={styles.tipoSugestao}>Sugestão</Text>
                        <Text style={styles.protocolo}>OUV-2026-001235</Text>
                    </View>
                </View>

<<<<<<< HEAD

=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
                {/* MANIFESTAÇÃO 3 */}
                <View style={styles.card}>
                    <View style={styles.cardTopo}>
                        <Text style={styles.cardTitulo}>Elogio à Prof. Maria</Text>
                        <View style={styles.statusConcluida}>
                            <Text style={styles.statusConcluidaTexto}>Concluída</Text>
                        </View>
                    </View>
                    <Text style={styles.cardDescricao}>
                        A professora Maria tem sido excepcional nas aulas de português. Metodologia inovadora e engajadora.
                    </Text>
                    <View style={styles.cardRodape}>
                        <Text style={styles.tipoElogio}>Elogio</Text>
                        <Text style={styles.protocolo}>OUV-2026-001236</Text>
                    </View>
                </View>
<<<<<<< HEAD


=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
            </ScrollView>
        </View>
    );
}

<<<<<<< HEAD

=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerHome: {
        backgroundColor: '#20B77A',
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 5,
    },
    headerTitulo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    headerSubtitulo: {
        color: '#fff',
        fontSize: 16,
    },
    homeScroll: {
        flex: 1,
    },
    homeContent: {
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 30,
    },
    tituloLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
<<<<<<< HEAD
        width: '100%',
=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
    },
    minhasManifestacoes: {
        fontSize: 20,
        fontWeight: '500',
        color: '#111',
    },
    botaoNova: {
        backgroundColor: '#20B77A',
<<<<<<< HEAD
        paddingHorizontal: 12,
        paddingVertical: 15,
=======
        paddingHorizontal: 18,
        paddingVertical: 14,
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
        borderRadius: 16,
    },
    botaoNovaTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
<<<<<<< HEAD
        textAlign: 'center'
=======
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E1E4E8',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    cardTopo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardTitulo: {
        flex: 1,
        fontSize: 18,
        fontWeight: '600',
        color: '#111',
        marginRight: 10,
    },
    cardDescricao: {
        color: '#60708A',
        fontSize: 14,
        lineHeight: 21,
        marginTop: 15,
        marginBottom: 18,
    },
    cardRodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    protocolo: {
        color: '#60708A',
        fontSize: 12,
    },
    statusAndamento: {
        backgroundColor: '#F0E1FF',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 15,
    },
    statusAndamentoTexto: {
        color: '#7329C9',
        fontSize: 12,
    },
    statusRecebida: {
        backgroundColor: '#DCE8FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
    },
    statusRecebidaTexto: {
        color: '#3867D6',
        fontSize: 12,
    },
    statusConcluida: {
        backgroundColor: '#DDF8E8',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
    },
    statusConcluidaTexto: {
        color: '#16834B',
        fontSize: 12,
    },
    tipoReclamacao: {
        color: '#FF3B30',
        fontSize: 13,
    },
    tipoSugestao: {
        color: '#315BFF',
        fontSize: 13,
    },
    tipoElogio: {
        color: '#00A651',
        fontSize: 13,
    },
<<<<<<< HEAD
});

=======
});
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
