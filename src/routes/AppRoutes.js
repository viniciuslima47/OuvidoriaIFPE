import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';

import { initializeDataBase } from '../database/initializeDataBase';

import NavigationBar from '../navigation/NavigationBar';
import ConfigScreen from '../screens/ConfigScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserEditScreen from '../screens/UserEditScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <SQLiteProvider
            databaseName="myDatabase.db"
            onInit={initializeDataBase}
        >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ title: 'Cadastro' }}
                />

                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
                    {({ route }) => (
                        <NavigationBar
                            usuario={route.params?.usuario}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="Config"
                    component={ConfigScreen}
                    options={{
                        title: 'Configurações',
                        headerShown: true,
                        headerBackTitle: '',
                        headerTintColor: '#111827',
                        headerStyle: {
                            backgroundColor: '#FFFFFF',
                        },
                    }}
                />

                <Stack.Screen
                    name="EditarPerfil"
                    component={UserEditScreen}
                    options={{ title: 'Editar' }}
                />
            </Stack.Navigator>
        </SQLiteProvider>
    );
}