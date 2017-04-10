/**
 * 设置页面
 * 引用组件地址：
 * https://github.com/oblador/react-native-vector-icons
 * https://github.com/marcshilling/react-native-image-picker 版本为0.24
 */
'use strict';
import React from 'react';
import {
  Alert,
  StyleSheet,
  InteractionManager,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  PixelRatio,
  Platform,
  Dimensions,
  AsyncStorage,
  ListView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Login from './Login';

import Titile from './Title'
let {height, width,} = Dimensions.get('window');
let Global = require('./Global');

export default class Center extends React.Component {
  
  render() {
    return (
       <View>    
      <Titile  text='个人设置' />
      <Text>个人设置</Text>
      
      </View>
    );
  }
}
let styles = StyleSheet.create({
 
});


