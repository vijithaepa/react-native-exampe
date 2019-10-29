import React, {Component} from 'react'
import {View, StyleSheet, Image, Animated} from "react-native";

// decay - initial velocity and slow to a stop
// spring - spring action
// timing - animated a value over a time

export default class AnimationScreen extends Component{

    state = {
        opacity: new Animated.Value(0),
        width: new Animated.Value(0),
        height: new Animated.Value(0)
    }

    componentDidMount() {
        const {opacity, width, height} = this.state

        Animated.timing(opacity, {toValue: 1, duration: 1000})
            .start()

        Animated.timing(width, {toValue: 200, duration: 1000})
            .start()
        Animated.timing(height, {toValue: 200, duration: 1000})
            .start()

    }

    render() {
        const {opacity, width, height} = this.state
        return(
            <View style={styles.container}>
                <Animated.Image style={[styles.img, {opacity,width, height}]}
                       source={require('../assets/boy.png')}
                />

            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 200,
        height: 200
    }
})
