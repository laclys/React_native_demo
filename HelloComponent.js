/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// ES6创建组件
export default class HelloComponent extends Component{
    render() {
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {this.props.name}</Text>
    }
}

// ES5创建组件
// var HelloComponent=React.createClass({
//     render() {
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//     }    
// })
// module.exports=HelloComponent;

// 函数式创建组件(无状态的（不能使用this）)

// function HelloComponent(props) {
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {props.name}</Text>;
// }
// module.exports=HelloComponent;

