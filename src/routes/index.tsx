import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Search from "../screens/Search";

export type PropsNavigationStack = {
    Home: undefined;
    Login: undefined;
    Register: undefined
    Search: {
        query: string
    };
}

const Stack = createNativeStackNavigator<PropsNavigationStack>();

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>

const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Search" component={Search}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes