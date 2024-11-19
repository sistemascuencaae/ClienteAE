import { PendingBillsScreen } from '../screens/user/PendingBillsScreen';
import ProfileUserScreen from '../screens/user/ProfileUserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TabUserNavigation = () => (
    <Tab.Navigator>
        <Tab.Screen name="PendingBillsScreen" component={PendingBillsScreen}
            options={{
                title: 'Facturas Pendientes'
            }}
        />
        <Tab.Screen name="Profile" component={ProfileUserScreen}
            options={{
                title: 'Mi Perfil'
            }}
        />
    </Tab.Navigator>
);

export default TabUserNavigation;