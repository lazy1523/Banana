/**
 * 主界面框架
 * 引用组件地址：
 * https://github.com/skv-headless/react-native-scrollable-tab-view
 * 
 * 
 */
'use strict';
import React from 'react';
import Home from './Home';
import News from './News';
import Center from './Center';
import TabBar from './TabBar';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    }
  }
 
  render() {//back属性是为了在设置页面回调调整选项卡位置
    return (
      <ScrollableTabView
        locked={true}
        tabBarBackgroundColor={"#2683da"}
        initialPage={this.state.selectedTab}
        tabBarPosition="bottom"
        scrollWithoutAnimation={false}
        page={this.state.page}
        tabBarActiveTextColor={"#FF8247"}
        tabBarInactiveTextColor={"#e5e5e5"}
        tabBarTextStyle={{ fontSize: 10 }}
        renderTabBar={() => <TabBar />}
      >
        <Home  {...this.props} tabLabel='home,主页' />
        <News  {...this.props} tabLabel='th-list,新闻'  />
        <Center  {...this.props} tabLabel='user,个人' back={() => { this.setState({ page: 0 }) }} />
      </ScrollableTabView>
    );
  }
}

