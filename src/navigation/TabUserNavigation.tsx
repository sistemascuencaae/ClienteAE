import { PendingBillsScreen } from '../screens/user/PendingBillsScreen';
import ProfileUserScreen from '../screens/user/ProfileUserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const TabUserNavigation = () => (
    <Tab.Navigator>
        <Tab.Screen name="PendingBillsScreen" component={PendingBillsScreen}
            options={{
                title: 'Mis creditos',
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="credit-card" size={24} color={color || "#323233"} />
                ),
            }}
        />
        <Tab.Screen name="Profile" component={ProfileUserScreen}
            options={{
                title: 'Mi Perfil',
                tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="account" size={24} color={color || "#323233"} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default TabUserNavigation;

//credit-card