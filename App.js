import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount() {
        const { count } = this.state;
        this.setState({ count: count + 1 });
    };

    render() {
        const { count } = this.state;
        
        return (
            <View style={styles.rootContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>React Native Basics</Text>
                </View>
                <View style={styles.outputContainer}>
                    <Text style={styles.output}>{count}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title='Press Me' 
                        buttonStyle={styles.button}
                        onPress={this.incrementCount.bind(this)} 
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleContainer: {
        paddingLeft: 30,
        paddingTop: 100

    },
    title: {
        fontSize: 30
    },
    buttonContainer: {
        alignItems: 'center',
        paddingBottom: 40
    },
    button: {
        width: 200,
        height: 57,
        backgroundColor: '#3467eb',
        borderRadius: 8
    },
    outputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    output: {
        fontSize: 30
    }
});