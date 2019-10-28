import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FlexboxExample from "./components/FlexboxExample";
import Touchables from "./components/Touchables";
import TabNavigation from "./components/TabNavigation";
import TabNavigator from "./components/TabNavigation";
import Tabs from './components/SimpleTabNavigation'
import StackNavigator from './components/StackNavigator'
import SimpleStackNavigator from './components/SimpleStackNavigator'
import SimpleDrawerNavigator from './components/SimpleDrawerNavigator'
import DrawerNavigator from './components/DrawerNavigator'

export default class App extends Component {

    render() {
        console.log('Loading ...')
        return (
            <View style={{flex: 1}}>
                {/*<FlexboxExample />*/}
                {/*<Touchables/>*/}
                {/*<TabNavigator />*/}
                {/*<Tabs/>*/}
                {/*<StackNavigator/>*/}
                <DrawerNavigator/>
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
