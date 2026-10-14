import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ConfigScreen({ navigation, usuario }) {
    const [onlyMyPosts, setOnlyMyPosts] = useState(true);

    function handleLogout() {
        Alert.alert(
            'Sair da conta',
            'Deseja realmente sair da sua conta?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: () => {
                        const parentNavigation = navigation.getParent();

                        if (parentNavigation) {
                            parentNavigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        } else {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        }
                    },
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style={'dark'} />

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Perfil */}
                <View style={styles.card}>
                    <View style={styles.profileInfo}>
                        <View style={styles.avatar}>
                            <Ionicons
                                name="person-outline"
                                size={25}
                                color="#FFFFFF"
                            />
                        </View>

                        <View style={styles.userInfo}>
                            <Text style={styles.name}>
                                {usuario?.nome ?? 'Usuário'}
                            </Text>

                            <Text style={styles.email}>
                                {usuario?.email ?? 'E-mail não informado'}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.navigate('EditarPerfil')}
                    >
                        <Text style={styles.editButtonText}>Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                {/* Visualização */}
                <View style={styles.optionCard}>
                    <Ionicons
                        name="eye-outline"
                        size={21}
                        color={'#111827'}
                    />

                    <View style={styles.optionInfo}>
                        <Text style={styles.optionTitle}>
                            Visualização
                        </Text>
                        <Text style={styles.optionDescription}>
                            Mostrar apenas meus posts
                        </Text>
                    </View>

                    <Switch
                        value={onlyMyPosts}
                        onValueChange={setOnlyMyPosts}
                        trackColor={{ false: '#CBD5E1', true: '#36B982' }}
                        thumbColor="#FFFFFF"
                    />
                </View>

                {/* Alterar senha */}
                <TouchableOpacity
                    style={styles.optionCard}
                    onPress={() => navigation.navigate('AlterarSenha')}
                >
                    <View style={styles.lockIcon}>
                        <Ionicons
                            name="lock-closed-outline"
                            size={20}
                            color={'#111827'}
                        />
                    </View>

                    <View style={styles.optionInfo}>
                        <Text style={styles.optionTitle}>
                            Alterar senha
                        </Text>
                        <Text style={styles.optionDescription}>
                            Modificar sua senha de acesso
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Sair */}
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
                    <Text style={styles.logoutText}>Sair da conta</Text>
                </TouchableOpacity>

                {/* Rodapé */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Ouvidoria IFPE v1.0.0
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        paddingHorizontal: 26,
        paddingTop: 80,
        paddingBottom: 30,
    },
    card: {
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        padding: 14,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        gap: 12,
    },
    avatar: {
        width: 43,
        height: 43,
        borderRadius: 22,
        backgroundColor: '#36B982',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    email: {
        fontSize: 12,
        color: '#718096',
        marginTop: 4,
    },
    editButton: {
        height: 45,
        borderWidth: 1,
        borderColor: '#20B77A',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButtonText: {
        color: '#20B77A',
        fontSize: 14,
        fontWeight: '500',
    },
    optionCard: {
        minHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
    },
    optionInfo: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
    },
    optionDescription: {
        fontSize: 12,
        color: '#718096',
        marginTop: 4,
    },
    lockIcon: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButton: {
        height: 44,
        borderRadius: 14,
        backgroundColor: '#E94B4B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: -1,
    },
    logoutText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    footer: {
        alignItems: 'center',
        marginTop: 42,
        gap: 5,
    },
    footerText: {
        fontSize: 11,
        color: '#718096',
        textAlign: 'center',
    },
});