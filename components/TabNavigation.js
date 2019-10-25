import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';


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

const Tabs = TabNavigator({
    Home: {
        screen: Home,
    },
    DashBoard: {
        screen: DashBoard,
    }
})

export default class TabNavigation extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Tabs/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
})
