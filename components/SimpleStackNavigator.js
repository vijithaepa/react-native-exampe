import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>This is the Home view</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style>
            <Text style={styles.btn}>Press here for the Dashboard</Text>
        </TouchableOpacity>
    </View>
);

const Dashboard = () => (
    <View style={styles.container}>
        <Text>This is the Dashboard</Text>
    </View>
);

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home'
            }
        },
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                title: 'Dashboard Screen',
                headerTintColor: 'blue'
            }
        },
    },
    {
        initialRouteName: 'Home',
    }
)

export default createAppContainer(RootStack)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    }
})
