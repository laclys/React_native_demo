/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

export default class RefTest extends Component {
    state = {
        size: 80
    }
    constructor(props) {
        super(props);
        // this.state={     size:80, }
    }
    getSize () {
    return this.state.size;
    }
    render() {
        return <View style={{backgroundColor:'blue'}}>
            <Text style={{fontSize:20}}
                onPress={() => {
                this.setState({
                    size: this.state.size + 10
                })
            }}>-> 大大大</Text>
            <Text style={{fontSize:20}}
                onPress={() => {
                this.setState({
                    size: this.state.size - 10
                })
            }}>-> 小小小</Text>
            <Image
                style={{width:this.state.size,height:this.state.size}}
                source = {require('./pic.jpg')}
            />
        </View>
    }
}