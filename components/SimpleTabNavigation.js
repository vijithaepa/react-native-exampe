import React from 'react'
import {View, Text} from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const Hello = () => (
    <View>
        <Text>Hello!</Text>
    </View>
);

const Goodbye = () => (
    <View>
        <Text>Goodbye!</Text>
    </View>
);

const Tabs = createBottomTabNavigator({
    Hello: {
        screen: Hello,
        navigationOptions: {
            tabBarIcon: ()=> <FontAwesome name='home' size={30} color ='black' />
        }
    },
    Goodbye: {
        screen: Goodbye,
        navigationOptions: {
            tabBarIcon: ()=> <FontAwesome name='dashboard' size={30} color ='black' />
        }
    },
});

export default createAppContainer(Tabs);
