'use strict';

import React from 'react';
import {
View,
Text
}from 'react-native'

export default class Title extends React.Component{


    render(){
        return(
        <View style={{ height: 56, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 17, color: 'black' }}>{this.props.text}</Text>
        </View>
        );
    }

}

 