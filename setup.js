/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloComponent from './HelloComponent';
import LifecycleComponent from './LifecycleComponent';
import EiComponent,{name,age,sum} from './EiComponent';
import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';

import Student from './Student';
import MingStu from './MingStu';

export default class setup extends Component {
  constructor(props){
    super(props);
    this.state=({
      remove:false,
      result:0,
      size:0,
    })
    this.stu = new Student('小明','男',13);
    this.ming = new MingStu();
  }
  render() {
    var view = this.state.remove?null:<LifecycleComponent/>
    var text = this.state.remove?"点击add":"移除remove";
    var params = {
      name:'小张',
      age:25,
      sex:'man'
    }
    var {name,age} = params;
    return (
      <View style={styles.container}>
        {/*<HelloComponent name="Lac"/>*/}
        {/*<LifecycleComponent/>*/}
        <Text 
          style={{fontSize:20}}
          onPress={()=>{
            this.setState({
              remove:!this.state.remove
            })
          }}
        >{text}</Text>
        {view}
        <EiComponent/>
        <Text style={{fontSize:20}}>名字:{name}</Text>
        <Text style={{fontSize:20}}>年龄:{age}</Text>
        <Text style={{fontSize:20}}
          onPress={()=>{
            var result=sum(2,3);
            this.setState({
              result:result,
            })
          }}
          >2+3={this.state.result}</Text>
          <PropsTest
            // name="Mac"
           // name={params.name}
           // age={params.age}
           // {...params}
           name={name}
           age={age}
          />
          <StateTest/>
          <Text
            style={{fontSize:20}}
            onPress={
              ()=>{
                console.log(this.refs.reftest.state.size);
                var size = this.refs.reftest.getSize();
                this.setState({
                  size:size
               })
              }
            }
          >获取Size大小(点击){this.state.size}</Text>
          <RefTest
            ref="reftest"   
          />
          <Text style={{fontSize:20}}>{this.stu.getDescription()}</Text>
          <Text style={{fontSize:20}}>{this.ming.getDescription()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:50,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


