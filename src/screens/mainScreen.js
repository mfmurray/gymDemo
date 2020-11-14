import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'
import { Octicons, FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import {style} from "../styles"


import {LeaderBoard} from '../screens/views/leaderBoard';
import {Schedule} from '../screens/views/schedule';
import {Locations} from '../screens/views/locations';
import {Video} from '../screens/views/video';

import {Popup1} from '../screens/popup/popup1';
import {Popup2} from '../screens/popup/popup2';
import {Popup3} from '../screens/popup/popup3';

import {Tab1} from '../screens/tabBar';

let customFonts = {'Inter-Black-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),'Inter-Black': require('../../assets/fonts/Roboto-Regular.ttf'),};
var panResponderSpeed = 40

export const MainScreen = ({ navigation }) => {

  /////////////Redux
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();
  /////////////Fonts
  const  _cacheResourcesAsync = async () => {
    await Font.loadAsync(customFonts);
  }

  const [isReady, setReady] = useState(false);
  const [popupState, setpopupState] = useState(1);
  const [count, setCount] = useState(10);
  const [mainState, setmainState] = useState(1);
  const [viewState, setViewState] = useState(1);


  const pull = useRef(new Animated.Value(style.height)).current;
  const pan = useRef(new Animated.ValueXY({x:0,y:style.height})).current;
  const panResponder = useRef(
   PanResponder.create({
     onStartShouldSetPanResponder : () => false,
     onMoveShouldSetPanResponder : (e, gestureState) => {
         const {dx, dy} = gestureState;

         return (Math.abs(dy) > 40);
     },
     onPanResponderGrant: () => {pan.setOffset({x: 0,y: 0});},
     onPanResponderMove: Animated.event([null,{ dx: pan.x, dy: pan.y }], {useNativeDriver: false} ),
     onPanResponderRelease: (evt, gestureState) => {
       pan.flattenOffset()

       var speed = gestureState.vy
       var position = parseInt(JSON.stringify(pan.y))

       if (speed>2 || position>style.height*.3) {
         Animated.timing(pan,{toValue:{x:0,y:style.height}, duration:50, useNativeDriver: true}).start();
         setViewState(1)
         console.log('speed ',speed)
       }
       else {
         Animated.timing(pan,{toValue:{x:0,y:style.height*.06}, duration:50, useNativeDriver: true}).start();
       }

     }
   })
  ).current;


  ///////////////////////////////

  function downFunction() {
    setViewState(1)
    panResponderSpeed = 40
    Animated.timing(pan,{toValue:{x:0,y:style.height}, duration:100, useNativeDriver: true}).start();
  }
  function upSettings() {
      setViewState(2)
      setpopupState(1,
      Animated.timing(pan,{toValue:{x:0,y:style.height*.06}, duration:100, useNativeDriver: true}).start())
  }
  function upClasses() {
      setViewState(2)
      setpopupState(2,
      Animated.timing(pan,{toValue:{x:0,y:style.height*.06}, duration:100, useNativeDriver: true}).start())
  }
  function upLocations() {
      setViewState(2)
      panResponderSpeed = 150
      setpopupState(3,
      Animated.timing(pan,{toValue:{x:0,y:style.height*.06}, duration:100, useNativeDriver: true}).start())
  }


  //////////////////////////////
  const panYlimit = pan.y.interpolate({inputRange: [style.height*.06, style.height],outputRange: [style.height*.06, style.height],extrapolate: 'clamp'})
  const mainViewScale = panYlimit.interpolate({inputRange: [0, style.height],outputRange: [0.9, 1],extrapolate: 'clamp'})
  const mainViewHeight = panYlimit.interpolate({inputRange: [0, style.height],outputRange: [style.height*.05, 0],extrapolate: 'clamp'})
  const mainViewOpacity = pan.y.interpolate({inputRange: [0, style.height],outputRange: [0.2, 0],extrapolate: 'clamp'})

  return (
     isReady === false ? ( <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />) :(

    <View style={styles.container}>
      <Animated.View style={{backgroundColor:'white', height:style.height, width:style.width, alignItems:'center',transform: [{ translateY: mainViewHeight}, {scaleX:mainViewScale}], borderRadius:(viewState==1 ? 0:style.width*.04)}}>

        {mainState==1 ? (<LeaderBoard
          stringy = {"hello"}
          navigation = {navigation}
          onPress={() => upSettings()}
          onPress2={() => upClasses()}
          onPress3={() => setmainState(2)}
        />):(null)}

        {mainState==2 ? (<Schedule
          stringy = {"hello"}
          navigation = {navigation}
          onPress={() => upClasses()}
          onPress2={() => upLocations()}
        />):(null)}

        {mainState==3 ? (<Locations
          stringy = {"hello"}
          navigation = {navigation}
        />):(null)}

        {mainState==4 ? (<Video
          stringy = {"hello"}
          navigation = {navigation}
        />):(null)}

        <Tab1 mainState1={()=> setmainState(1)} mainState2={()=> setmainState(2)} mainState3={()=> setmainState(3)} mainState4={()=> setmainState(4)}/>

        <Animated.View style={{position:'absolute', top:0, left:0, right:0, bottom:0, opacity:mainViewOpacity, backgroundColor:'black'}} pointerEvents="none"></Animated.View>
      </Animated.View>

      <Animated.View style={{height:style.height, transform: [{ translateX: 0 }, { translateY: panYlimit }], width:style.width, backgroundColor:'white', position:'absolute',alignItems:'center', justifyContent:'center', top:0, borderRadius:style.width*.04}}
      {...panResponder.panHandlers}>
        {popupState==1 ? (<Popup1
          onPress={() => downFunction()}
        />):
        (null)}
        {popupState==2 ? (<Popup2
          onPress={() => downFunction()}
        />):
        (null)}
        {popupState==3 ? (<Popup3
          onPress={() => downFunction()}
        />):
        (null)}
      </Animated.View>

      <StatusBar style="auto" />

    </View>


  ));
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width:style.width
  },
});
