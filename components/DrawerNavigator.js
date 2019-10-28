import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , Button} from "react-native";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const HomeScreen = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is the Home view</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.btn}>
            <Text>Open the drawer!</Text>
        </TouchableOpacity>
    </View>
);

const Dashboard = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is the Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.btn}>
            <Text>Open the drawer!</Text>
        </TouchableOpacity>
    </View>
);


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Notifications: {
        screen: Dashboard,
    },
});

export default createAppContainer(MyDrawerNavigator);

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
