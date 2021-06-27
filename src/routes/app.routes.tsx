import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//páginas
import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { Guilds } from '../screens/Guilds';

//estilos
import { theme } from '../global/styles/theme';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator
            headerMode="none"
            screenOptions={
                {
                    cardStyle: {
                        backgroundColor: theme.colors.secondary100
                    }
                }
            }
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
            <Screen
                name="Guilds"
                component={Guilds}
            />

        </Navigator>
    );
}