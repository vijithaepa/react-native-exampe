import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';


const HomeScreen = ({navigation}) => (
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
