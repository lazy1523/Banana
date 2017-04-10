/**
 * 登录页面,登录验证
 * 引用组件地址：
 * https://github.com/oblador/react-native-vector-icons
 * https://github.com/mathiasbynens/base64
 * 没做Token验证
 *  
 */
'use strict';
import React, {PropTypes} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Switch,
  Image,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from './Register';
import {Hoshi} from 'react-native-textinput-effects';
 
import Main from './Main';
import Title from './Title'
let Global = require('./Global');
let {height, width} = Dimensions.get('window');//获取屏幕高度宽度
let loginInfo = { "username": "", "password": "" };


const propTypes = {
  toRoute:PropTypes.func.isRequired,
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.toMain = this.toMain.bind(this);
    this.toRegister=this.toRegister.bind(this);
    this.state = {}
  }
toMain(){
    this.props.resetToRoute({
        component: Main
    })
  }
toRegister() {
    this.props.toRoute({
      name:'注册账号',
      component: Register,
    });
  }

  login() {//登录事件
      let _this = this;
      if(loginInfo.username==""||loginInfo.password==""){
        ToastAndroid.show('账号密码不能为空喔', ToastAndroid.SHORT);
        return false;
      }
      var request = new XMLHttpRequest();
      request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          console.log('success',request.responseText);
          let json=eval('('+request.responseText+')')
          if(json.success){
            ToastAndroid.show(json.msg, ToastAndroid.SHORT);
           _this.toMain();
          }
          else{
             ToastAndroid.show(json.msg, ToastAndroid.SHORT);
          }
        } else {
          ToastAndroid.show('登录失败，请见查网络', ToastAndroid.SHORT);
        }
      };
      request.open('POST', 'http://192.168.18.28:8888/jeeplus/a/login?username='+loginInfo.username+'&password='+loginInfo.password+'&mobileLogin=true');
      request.send();
  }

  render() {//页面渲染ß
    return (
        
   
      <ScrollView style={{ flex: 1 }} >
    
        <View style={styles.body}>
         <View style={styles.container} >
                    <Image
                    source={require("./imgs/rn.png")} 
                    style={styles.logo}/>
                </View>
          <View  >
        
            <Hoshi
            style={styles.Hoshi}
             label={'手机号'}
             borderColor={'#b76c94'}
             underlineColorAndroid="transparent"
             onChangeText={(text) => {loginInfo.username = text; }}
             />
          </View>
          <View style={styles.horizontalbar} />
          <View >
           <Hoshi
             style={styles.Hoshi}
             label={'密码'}
             borderColor={'#b76c94'}
             secureTextEntry={true}
             onChangeText={(text) => { loginInfo.password = text; }}
             />
         
          </View>
        
          <TouchableOpacity onPress={()=>this.login()}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>登录</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.resbar}>
            <TouchableOpacity onPress={this.toRegister}>
              <Text style={styles.text}>注册账号</Text>
            </TouchableOpacity>
            <View style={styles.verticalbar} />
            <TouchableOpacity onPress={()=>ToastAndroid.show('别点啦，没做呢!', ToastAndroid.SHORT)}>
              <Text style={styles.text}>忘记密码</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
let styles = StyleSheet.create({
  horizontalbar: {
    height: 1,
    backgroundColor: '#ccc',
    width: 0.9 * width,
    alignSelf: 'center'
  },
    logo: {
    width: 160,
    height: 160,
    marginTop: 50
 },
  container: {  
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinput: {
    height: 45,
    textAlignVertical: 'center',
    paddingLeft: 20,
    width: 0.6 * width
  },
  Hoshi:{
    height:45,
    width:250
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
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
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
  },
  verticalbar: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10
  },
  text: {
    color: '#007aff'
  },
  resbar: {
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row'
  }
});



