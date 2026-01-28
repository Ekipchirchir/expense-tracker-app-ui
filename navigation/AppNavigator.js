import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import WalletsScreen from '../screens/WalletsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreen from '../screens/HelpScreen';

const Tab = createMaterialTopTabNavigator();

const ICONS = {
  Home: 'dashboard',
  Analytics: 'analytics',
  Wallets: 'account-balance-wallet',
  Settings: 'settings',
  Help: 'support',
};


function NeomorphicTabBar({ state, navigation }) {
  return (
    <View style={styles.tabWrapper}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              activeOpacity={0.85}
              onPress={() => navigation.navigate(route.name)}
            >
              <View
                style={[
                  styles.neoButton,
                  focused && styles.neoButtonActive,
                ]}
              >
                <MaterialIcons
                  name={ICONS[route.name]}
                  size={24}
                  color={focused ? '#20D561' : '#efecec'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}


export default function AppNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0B' }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarPosition="bottom"
          swipeEnabled
          tabBar={(props) => <NeomorphicTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Analytics" component={AnalyticsScreen} />
          <Tab.Screen name="Wallets" component={WalletsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Help" component={HelpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  tabWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#333338f6',
    borderRadius: 40,
    padding: 14,
    width: '90%',
    justifyContent: 'space-between',

    
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  neoButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',

    
    shadowColor: '#111',
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
    neoButtonActive: {
    backgroundColor: '#0f0f10',
    transform: [{ scale: 1.1 }],
    },

});
