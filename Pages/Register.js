/**
 * 注册页面
 * 引用组件地址：
 * https://github.com/oblador/react-native-vector-icons
 * 
 */
'use strict';
import React ,{PropTypes} from 'react';
import {
  Alert,
  StyleSheet,
  InteractionManager,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
let {height, width} = Dimensions.get('window');
let Global = require('./Global');
import Main from './Main';
import Login from'./Login'
import {Hoshi} from 'react-native-textinput-effects'
let registerinfo = { "username": "", "password": "" };
const propTypes={
 toRoute:PropTypes.func.isRequired,
}
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.ToLogin=this.ToLogin.bind(this);
  }
  ToLogin(){
    this.props.toRoute({
      component:Login
    });
  }
  
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.titlebar}>
          <TouchableOpacity  style={styles.backbutton} onPress={this.ToLogin}>
            <Icon name="angle-left" size={30} color="#ccc" />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, color: 'black' }}>注册</Text>
          <Icon name="angle-left" size={30} color="#f0f0f0" />
        </View>
        <View style={styles.body}>
          <View >
     
            <Hoshi
            style={styles.Hoshi}
             label={'手机号'}
             borderColor={'#b76c94'}
             underlineColorAndroid="transparent"
             onChangeText={(text) => { registerinfo.username = text; }}
             />
            
          </View>
          <View style={styles.horizontalbar} />
          <View  >
            <Hoshi
            style={styles.Hoshi}
             label={'密码'}
             borderColor={'#b76c94'}
             underlineColorAndroid="transparent"
              onChangeText={(text) => { registerinfo.password = text; }}
             />
           
          </View>
          <TouchableOpacity onPress={()=>this.ToLogin(this)}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>注册</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, marginLeft: 10 }}>输入手机号和密码（至少六位）,注册即可</Text>
        </View>
      </ScrollView>
    );
  }
}
let styles = StyleSheet.create({
  backbutton: {
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
   Hoshi:{
    height:45,
    width:250
  },
  horizontalbar: {
    height: 1,
    backgroundColor: '#ccc',
    width: 0.9 * width,
    alignSelf: 'center'
  },
  textinput: {
    height: 45,
    textAlignVertical: 'center',
    paddingLeft: 20,
    width: 0.6 * width
  },
  textinputcontainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  titlebar: {
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  titletext: {
    fontSize: 17,
    color: 'black'
  },
  switch: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: '#007aff',
    height: 45,
    width: width - 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 17
  }
});

