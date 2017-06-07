import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Alert,TouchableHighlight} from 'react-native';

export default class TouchableTest extends Component {
  constructor(props) {
    super(props);
    this.state=({count: 0,text:'',text1:''})
  }
  render() {
    return <View>
      {/*<TouchableWithoutFeedback
        onPress={() => {
        this.setState({
          count: this.state.count + 1
        })
      }}
        onLongPress={()=>{
          Alert.alert('提示','确认删除吗？',[
            {text:'取消',onPress:()=>{},style:'cancel'},
            {text:'确定',onPress:()=>{}}
          ])
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            我是TouchableWithoutFeedback,单击我
          </Text>
        </View>
      </TouchableWithoutFeedback>
      < Text style={styles.text}>
        您单击了 : {this.state.count
}次
      </Text>*/}
{/*<TouchableWithoutFeedback
    disabled={this.state.waiting}
    onPress={()=> {
        this.setState({text:'正在登录...',waiting:true})
        setTimeout(()=>{
            this.setState({text:'网络不流畅',waiting:false})
        },2000);

    }}
>
    <View style={styles.button}>
        <Text style={styles.buttonText}>
           登录
        </Text>
    </View>
</TouchableWithoutFeedback>
<Text style={styles.text}>{this.state.text}</Text>
<Text style={styles.text}>{this.state.text1}</Text>
<TouchableWithoutFeedback
    onPressIn={()=> {
        this.setState({text1:'触摸开始',startTime:new Date().getTime()})
    }}
    onPressOut={()=>{
        this.setState({text1:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
    }}
>
    <View style={styles.button}>
        <Text style={styles.buttonText}>
            点我
        </Text>
    </View>
</TouchableWithoutFeedback>*/}
<TouchableHighlight
    style={styles.button}
    activeOpacity={0.2}
    underlayColor='green'
    onHideUnderlay={()=>{
        this.setState({text:'衬底被隐藏'})
    }}
    onShowUnderlay={()=>{
        this.setState({text:'衬底显示'})
    }}
    onPress={()=>{

    }}
>
    <View style={styles.button}>
        <Text style={styles.buttonText}>
            TouchableHighlight
        </Text>
    </View>
</TouchableHighlight>
<Text style={styles.text}>{this.state.text}</Text>
    </View>
  
  }
}
const styles=StyleSheet.create({
  button:{
    borderWidth:1,
    borderRadius:5
  },
  buttonText:{
    fontSize:18
  },
  text:{
    fontSize:20
  }
})