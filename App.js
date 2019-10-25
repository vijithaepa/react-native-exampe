import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FlexboxExample from "./components/FlexboxExample";
import Touchables from "./components/Touchables";
import TabNavigation from "./components/TabNavigation";
import { TabNavigator } from "react-navigation";

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

export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                {/*<FlexboxExample />*/}
                {/*<Touchables/>*/}
                <Tabs />
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
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    }
});
