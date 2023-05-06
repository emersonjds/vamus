import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/screens/HomeScreen";
import Trips from "./components/screens/Trips";

import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;





