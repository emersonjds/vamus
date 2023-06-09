//native
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//libs
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';

// internal
import HomeScreen from "./screens/HomeScreen";
import DetailsTrip from "./screens/DetailsTrip";
import Notification from "./screens/Notification";
import Proposal from "./screens/Proposal";
import Trips from "./screens/Trips";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }} />

      <Tab.Screen name="Travel" component={Trips}
        options={{
          tabBarLabel: "Viagens",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plane" size={24} color="black" />
          ),
        }} />

      <Tab.Screen name="Profile" component={Notification}
        options={{
          tabBarLabel: "Notificações",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="notification" size={24} color="black" />
          ),
        }} />

    </Tab.Navigator>
  )
}

// @ts-ignore
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailsTrip"
          component={DetailsTrip}
          options={{
            title: 'Detalhes'
          }}
        />
        <Stack.Screen
          name="Proposal"
          component={Proposal}
          options={{
            title: 'Criar Trip'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;





