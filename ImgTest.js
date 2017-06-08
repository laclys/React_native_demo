import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class ImgTest extends Component{
    render() {
        return <View>
                   {/*使用本地图片*/}
                    <Image
                    style={{width:300,height:100}}
                      source={require('./pic.jpg')}
                      // cover 默认属性
                      // resizeMode={'cover'}
                      resizeMode={'contain'}
                      // stretch:拉伸
                      // resizeMode={'stretch'}
                      // repeat ios only
                      // resizeMode={'repeat'}
                    />
                    {/*使用网络图片资源*/}
                    <Image
                      style={{width:200,height:100}}
                      source={{uri:'https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2263582212.jpg'}
                      }
                      resizeMode={'center'}
                    />
                    {/*原生图片资源*/}
                    {/*<Image
                      style={{width:200,height:100}}
                      source={{uri:'native_pic.jpg'}}
                    />*/}
               </View> 
    }
}