import React, { Component } from 'react'

import {
    Slider,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native'


class Touchables extends Component {

    state = {
        value: 0
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
                    <Text style={styles.btnText}>Touchable highlight</Text>
                </TouchableHighlight>
                <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.btnText}>Touchable Opacity</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this.handlePress}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Touchable Without feedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                {/*TouchableNativeFeedback only supports for Android platform*/}
                {/*<TouchableNativeFeedback onPress={this.handlePress}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Touchable Without feedback</Text>
                </View>
            </TouchableNativeFeedback>*/}
                <Slider
                    value={this.state.value}
                    minimumValue={-10} maximumValue={10}
                    step={1}
                    onValueChange={(value) => this.setState(() => ({value}))}/>
                <Text>
                    value: {this.state.value}
                </Text>
            </View>
        )
    }
}

export default Touchables

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    },
    btnText: {
        color: '#fff'
    }
});
