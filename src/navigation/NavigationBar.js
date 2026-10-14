<<<<<<< HEAD
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ConfigScreen from '../screens/ConfigScreen';
=======
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const Icons = {
    Inicio: 'home-outline',
    Reclamacoes: 'document-text-outline',
    Notificacoes: 'notifications-outline',
    Ajustes: 'settings-outline',
};

<<<<<<< HEAD
export default function NavigationBar({ usuario }) {
=======
export default function NavigationBar() {
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
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
<<<<<<< HEAD
                    height: 75, // Altura suficiente para acomodar ícone e texto
=======
                    height: 68, // Altura suficiente para acomodar ícone e texto
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
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
<<<<<<< HEAD
            <Tab.Screen name="Ajustes" options={{ title: 'Ajustes' }}>
                {(props) => (
                    <ConfigScreen
                        {...props}
                        usuario={usuario}
                    />
                )}
            </Tab.Screen>
=======
            <Tab.Screen name="Ajustes" component={HomeScreen} options={{ title: 'Ajustes' }} />
>>>>>>> b04943666113c4c058dbd624989d05cff5ca6da5
        </Tab.Navigator>
    );
}