import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import pageOne from './src/pageOne';
import pageTwo from './src/pageTwo';
import pageThree from './src/pageThree';


import allReducers from './src/store/reducers/index.js';
import {createStore ,bindActionCreators} from 'redux';
import {Provider , connect} from 'react-redux';
import { IncrementScreenOne , IncrementScreenTwo } from "./src/store/actions/index";

const store = createStore(allReducers);
// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    
    <Provider store= {store}>
    
    <Router>
      
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
            <Scene
              key="pageOne"
              component={pageOne}
              title="Screen One"
              onEnter={()=>store.dispatch(IncrementScreenOne())}
            />
            <Scene
              key="pageTwo"
              component={pageTwo}
              title="Screen Two"
              onEnter={()=>store.dispatch(IncrementScreenTwo())}
            />
                        <Scene
              key="pageThree"
              component={pageThree}
              title="this a screen"
            />
        </Scene>
    </Router>
    </Provider>
  );
}
export default  (App);