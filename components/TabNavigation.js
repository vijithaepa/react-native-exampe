import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

function DashBoard() {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    )
}

const TabNavigator = createBottomTabNavigator({
        Home: Home,
        Dashboard: DashBoard,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // return <FontAwesome name='home' size={30} color ='black' />
                    iconName = 'ios-home'
                } else if (routeName === 'Dashboard') {
                    iconName = 'ios-menu'
                        // return <FontAwesome name='dashboar' size={30} color ='black' />
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
