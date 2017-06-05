/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PropsTest extends Component {
    // 设置默认属性
    static defaultProps = {
        name: 'Bill',
        age: 16
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number
    }
    render() {
        return (
            <View>
                <Text
                    style={{
                    fontSize: 20,
                    backgroundColor: 'red'
                }}>Hello {this.props.name}</Text>
                <Text
                    style={{
                    fontSize: 20,
                    backgroundColor: 'red'
                }}>{this.props.age}</Text>
            </View>
        )
    }
}
