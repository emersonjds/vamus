import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Trips from "./screens/Trips";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/Profile";
import MyTravel from "./screens/MyTravel";


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
            <Tab.Screen name="MyTravel" component={MyTravel}
                options={{
                    tabBarLabel: "Minhas Viagens",
                    tabBarLabelStyle: {
                        color: "#000",
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Entypo name="list" size={24} color="black" />
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

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarLabelStyle: {
                        color: "#000",
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color="black" />
                    ),
                }} />

        </Tab.Navigator>
    )
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





