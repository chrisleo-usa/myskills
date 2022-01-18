import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { OtherPage } from '../pages/OtherPage';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false, //esconde header padrão do navigator
        tabBarActiveTintColor: '#FF872C', //o menu que estiver ativo fica com a cor secondary
        tabBarInactiveTintColor: '#969CB3', //os menus que não estão ativos ficam com a cor text
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
        },
      }}>
      <Screen name="Home" component={Home} />

      <Screen name="Luan" component={OtherPage} />
    </Navigator>
  );
};
