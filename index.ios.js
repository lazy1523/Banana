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
import Login from './Pages/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import Router from 'react-native-simple-router';

// 初始化页面
 const LoginPage={
    component:Login
  };
class index extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    return (  
      <View style={styles.flex}>
      <Router
        firstRoute={LoginPage}
        hideNavigationBar
        noStatusBar
      />
      </View>
      );
  }

}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
    flex:1
  },
  flex:{
    flex:1
  },
  titletext:{
  textAlign:'center'
  }
});

AppRegistry.registerComponent('Banana', () => index);