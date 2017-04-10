'use strict';
import React from 'react';
import {
  StyleSheet,
  InteractionManager,
  View,
  Text,
  TouchableOpacity,//单击无效果(推荐使用)
  TouchableHighlight,//单击有黑边
  TextInput,
  Dimensions,
  ScrollView,
  ListView,
  Image,
  RefreshControl,
  TouchableWithoutFeedback,
  Alert,
  Button,
  Platform,
 
} from 'react-native';
let Global = require('./Global');

import Titile from'./Title'
import ImagePicker from 'react-native-image-picker';

 const options = {
  title: '照片选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  quality:0.75,
  noData:false,
  allowsEditing:true,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


export default class News extends React.Component {
  
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state={
     avatarSource:null,
     title:null,
     content:null,
     dataSource: ds.cloneWithRows([
        
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 
        'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','Jackson', 'Jillian', 

      ])
   }
    }
    
    
  render() {
   
    return ( 
      <View >    
       <Titile text='新闻' /> 
         <View style={styles.container}>
      </View>
      <Text>news</Text>
       <TouchableOpacity onPress={()=>this.openMycamera()}>
        <Text>照片选择</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>this.ajax()}>
      <Text>{this.state.title}</Text>
       </TouchableOpacity>
       <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        
       <View style={{height:300}}> 
       
       <Text>
       下面是个滚动列表
       </Text>
       <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        </View>
      </View>
      
    );
  }
  openMycamera = () =>{
    ImagePicker.showImagePicker(options,(response) =>{
             console.log('response-----'+response.path);
          if (response.didCancel) {
    console.log('User cancelled image picker'); 
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
 
    let source = { uri: response.uri };
    this.setState({
      avatarSource: source
    });
  }
           
    })
  }
  
//ajax开始
  ajax=()=>{
      var request =new XMLHttpRequest();
      request.onreadystatechange=(e)=>{
        if(request.readyState!==4){
          return;
        }
        if(request.status===200){
          // console.log("获取数据成功+++++",request.responseText);
          let json=eval("("+request.responseText+")");
          console.log(json.body.data[0].title);
          if(json.success){
            alert("获取数据成功");
            this.setState({
              title:json.body.data[0].title
            });
          }
        }else{
          console.log("获取数据失败");
        }
      };
      request.open('GET','http://192.168.18.34:8888/jeeplus/a/mynews/news/getNewsList');
      request.send();
  }

}

let styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
  },
  pdf: {
        flex:1
    },
  uploadAvatar:{
    width:200,
    height:200,
    borderRadius:65
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});