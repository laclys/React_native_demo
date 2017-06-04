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

var name="Lac";
const age = "18";
export {name,age};

export default class Eicomponent extends Component{
    render() {
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
    }
}

export function sum(a,b) {
    return a+b;
}


