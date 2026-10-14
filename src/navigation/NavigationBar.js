import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ConfigScreen from '../screens/ConfigScreen';

const Tab = createBottomTabNavigator();

const Icons = {
    Inicio: 'home-outline',
    Reclamacoes: 'document-text-outline',
    Notificacoes: 'notifications-outline',
    Ajustes: 'settings-outline',
};

export default function NavigationBar({ usuario }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#20B77A',
                tabBarInactiveTintColor: '#718096',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    borderTopColor: '#E2E8F0',
                    paddingTop: 8,
                    height: 75, // Altura suficiente para acomodar ícone e texto
                },
                tabBarItemStyle: {
                    paddingBottom: 4,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500',
                },
                tabBarIcon: ({ color, focused }) => {
                    const iconName = Icons[route.name] || 'square-outline';
                    const name = focused ? iconName.replace('-outline', '') : iconName;
                    return <Ionicons name={name} size={22} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} options={{ title: 'Início' }} />
            <Tab.Screen name="Reclamacoes" component={HomeScreen} options={{ title: 'Reclamações' }} />
            <Tab.Screen name="Notificacoes" component={HomeScreen} options={{ title: 'Notificações' }} />
            <Tab.Screen name="Ajustes" options={{ title: 'Ajustes' }}>
                {(props) => (
                    <ConfigScreen
                        {...props}
                        usuario={usuario}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
