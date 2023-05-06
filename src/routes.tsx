import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/screens/HomeScreen";
import Trips from "./components/screens/Trips";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}
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
        <Tab.Screen name="Home" component={Trips} />
    </Tab.Navigator>
}

const Routes = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;



