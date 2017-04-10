 
'use strict';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import Titile from'./Title';
import Icon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper';
let {height, width} = Dimensions.get('window');//获取屏幕高度宽度
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
    <Titile  text='首页' />
      <Swiper style={styles.wrapper}   autoplay={true} showsButtons={true} height={165} showsPagination={true}>
        <View style={styles.slide1}>
          <Image source={require('./imgs/1.jpg')} />
        </View>
        <View style={styles.slide2}>
          <Image source={require('./imgs/2.jpg')} />
        </View>
        <View style={styles.slide3}>
         <Image source={require('./imgs/3.jpg')} />
        </View>
      </Swiper>
      
     <View style={styles.grid}>
        <View style={styles.cell}>
       <Icon
          name="heart"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
          size={30}   //图片大小
          color='#92BBD9'  //图片颜色
          />
        </View>
        <View style={styles.cell}>
          <Icon
          name="heart"    
          size={30}    
          color='#f4a460'   
          />
        </View>
        <View style={styles.cell}>
           <Icon
          name="heart"    
          size={30}    
          color='#f4a460'

          />
        </View>
        <View style={styles.cell}>
          <Icon
          name="heart"
          size={30}    
          color='#f4a460'   
          />
          </View>
        <View style={styles.cell}>
            <Icon
          name="heart"    
          size={30}    
          color='#92BBD9'   
          />
        </View>
      </View>
      
       <View style={styles.gird2} >
          <View style={styles.cell2}>
               <Icon
              name="heart"    
              size={30}    
              color='#92BBD9'   
          />
          </View>
          <View style={styles.cell2}>
               <Icon
              name="heart"    
              size={30}    
              color='#f4a460'   
          />
          </View>
           <View style={styles.cell2}>
                <Icon
              name="heart"    
              size={30}    
              color='#f4a460'   
          />
          </View>
           <View style={styles.cell2}>
                <Icon
              name="heart"    
              size={30}    
              color='#92BBD9'   
          />
          </View>
       </View> 
       <View style={styles.grid3}>
          <View style={styles.cell3}>
             <Icon
              name="heart"    
              size={30}    
              color='#92BBD9'   
              />
          </View>
          <View style={styles.cell3}>
             <Icon
              name="heart"    
              size={30}    
              color='#f4a460'   
              />
          </View>
          <View style={styles.cell3}>
             <Icon
              name="heart"    
              size={30}    
              color='#92BBD9'   
              />
          </View>
       </View>
      
   
     </View>
    );
  }
}
let styles = StyleSheet.create({
  grid:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  },
  cell:{
    flex:1,
    height:65,
    alignItems:'center',
    justifyContent:'center',

  },
  gird2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  cell2:{
    flex:1,
    height:150,
    alignItems:'center',
    justifyContent:'center',
  },
  grid3:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  cell3:{
    flex:1, 
    height:135,
    alignItems:'center',
    justifyContent:'center',
  },
  avatar:{
    height:150,width:150
  },
  textcontent: {
    marginTop: 3,
    fontSize: 15
  },
   wrapper: {
      flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  texttitle: {
    marginTop: 20,
    fontSize: 16,
    color: 'black'
  }
});


