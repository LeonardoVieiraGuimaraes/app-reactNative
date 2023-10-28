import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NurseScreen1 from '../screens/NurseScreen1';
import NurseScreen2 from '../screens/NurseScreen2';
import NurseScreen3 from '../screens/NurseScreen3';
import NurseScreen4 from '../screens/NurseScreen4';
import NurseScreen5 from '../screens/NurseScreen5';

const Tab = createMaterialTopTabNavigator();

function NurseTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Nurse1"
      screenOptions={({ route }) => ({
        tabBarLabel: () => null, // Esconder os rótulos das guias
        tabBarStyle: { backgroundColor: 'white' }, // Cor de fundo verde
        tabBarIndicatorStyle: { backgroundColor: 'black' }, // Cor da linha indicadora
      })}
    >
      <Tab.Screen name="Nurse1" component={NurseScreen1} />
      <Tab.Screen name="Nurse2" component={NurseScreen2} />
      <Tab.Screen name="Nurse3" component={NurseScreen3} />
      <Tab.Screen name="Nurse4" component={NurseScreen4} />
      <Tab.Screen name="Nurse5" component={NurseScreen5} />
    </Tab.Navigator>
  );
}

export default NurseTabs;
