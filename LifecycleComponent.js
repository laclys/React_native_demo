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

export default class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log('----constructor-----')
    }
    componentWillMount(){
        console.log('----componentWillMount-----')
    }
    componentDidMount(){
        console.log('----componentDidMount-----')
    }
    componentWillReceiveProps(nextProps){
        console.log('----componentWillReceiveProps-----')
    } 
    shouldComponentUpdate(extProps,nextState){
        console.log('----shouldComponentUpdate-----')
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('----componentWillUpdate-----')
    }
    componentDidUpdate(prevProps,prevState){
        console.log('----componentDidUpdate-----')
    }
    componentWillUnmount(){
        console.log('----componentWillUnmount-----')
    }
    render() {
        console.log('----render-----')
        return <View>
                <Text style={{fontSize:20,backgroundColor:'red'}}
                onPress={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}
                >点击</Text>
                <Text style={{fontSize:20}}>点击了{this.state.count}次</Text>
            </View>
    }
}
