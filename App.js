import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';
// import HomeScreen from './screens/HomeScreen';
// import ClientScreen from './screens/ClientScreen';
// import MaterialsScreen from './screens/MaterialsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import SplashScreen from './screens/SplashScreen';

// export {
//   HomeScreen,
//   MaterialsScreen,
//   ClientScreen,
//   ProfileScreen,
//   LoginScreen,
//   RegisterScreen,
//   SplashScreen,
// }

const StyledView = styled(View)
const StyledText = styled(Text)

function HomeScreen() {
  return (
    <StyledView className="flex-row">
      <StyledText className="flex-row text-[#f04646]">Hi,</StyledText>
      <StyledText className="flex-row items-center justify-center">User</StyledText>
    </StyledView>
  );
}

function MaterialsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Materials!</Text>
    </View>
  );
}

function ClientScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Client!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        tabBarActiveTintColor: '#34baeb',
      }}
    >
      <Tab.Screen
        name="Hi there, Welcome Back"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Materials"
        component={MaterialsScreen}
        options={{
          tabBarLabel: 'Materials',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Client"
        component={ClientScreen}
        options={{
          tabBarLabel: 'Client',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-edit" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
