import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Octicons, FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {style} from "../../../styles"

import {Weekday} from './weekday';
import {Day} from './day';


let customFonts = {
    'Inter-Black-Bold': require('../../../../assets/fonts/Roboto-Bold.ttf'),
    'Inter-Black': require('../../../../assets/fonts/Roboto-Regular.ttf'),
};

const yOffset = style.height*.27

export const Schedule = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const location = useSelector(state => state.settingsReducer.location);
  const scrollIndex = useSelector(state => state.settingsReducer.scrollIndex);
  const dispatch = useDispatch();

  const [isReady, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollState, setScrollState] = useState(1);
  const [headerState, setHeaderState] = useState(true);
  const [viewState, setViewState] = useState(1);
  const scrollY2 = useRef(new Animated.Value(-yOffset)).current;

  const  _cacheResourcesAsync = async () => {
    await Font.loadAsync(customFonts);
  }

  useLayoutEffect(() => {
    console.log('index change ', scrollIndex)
    var indexed = (1/3.5)*.27
    var factor = .822
     if (scrollIndex!==0 && isReady) {
       scrollViewRef.current.scrollTo({y: (scrollIndex-1)*style.height*factor+indexed*style.height+4, duration:200, animated: true,})
     }
  }, [scrollIndex]);

  function upFunction() {
    props.onPress()
  }
  function upFunction2() {
    props.onPress2()
  }

  function handleScroll(tab) {
    var indexed = (1/3.5)*.27
    var factor = .822

    var number = Math.ceil(((tab/style.height)-indexed)/factor)
    if (tab<-180) {
      setHeaderState(false)
    }
    if (tab>-180) {
      setHeaderState(true)
    }
    if (number==0) {
      number=1
    }
    setScrollState(number)
  }

  function scrollToView (tab) {
    var scrollHeight = (tab-1)*1000+yOffset/2+2
    scrollViewRef.current.scrollTo({y: scrollHeight, duration:200, animated: true,})
  }


  const headerHeight = scrollY2.interpolate({inputRange: [0, yOffset/3.5, yOffset],outputRange: [0, -yOffset/3.5, -yOffset/3.5],extrapolate: 'clamp'})
  const headerOpacity = scrollY2.interpolate({inputRange: [0, yOffset/3],outputRange: [1, 0],extrapolate: 'clamp'})
  const scrollViewRef = useRef();


  return (
     isReady === false ? ( <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />) :(

    <View style={{backgroundColor:style.color.grey2, flex:1,width:style.width,alignItems: 'center',justifyContent: 'center',marginBottom: style.height*.06+getBottomSpace(),borderTopLeftRadius:style.width*.04,borderTopRightRadius:style.width*.04,}}>

      <Animated.ScrollView
        onScroll={Animated.event( [{ nativeEvent: { contentOffset: {y: scrollY2}} }],{useNativeDriver: true,
          listener: event => { handleScroll(event.nativeEvent.contentOffset.y) }})}
        nestedScrollEnabled={true}
        style={{flex:1, borderTopLeftRadius:style.width*.04,borderTopRightRadius:style.width*.04,}}
        scrollEventThrottle={1}
        contentContainerStyle={{ marginTop: yOffset-style.height*.03, paddingBottom:yOffset, backgroundColor:style.color.grey2, width:style.width, alignItems:'center'}}
        ref={scrollViewRef}
      >

        {[...Array(29).keys()].map((datum, key) => {
          return <Day tab={datum} key={key}/>;
        })}

      </Animated.ScrollView>

      <Animated.View style={{alignItems:'center',borderTopLeftRadius:style.width*.04,borderTopRightRadius:style.width*.04, position:'absolute',top:0, left:0, right:0 ,backgroundColor:style.color.orange, height:yOffset-style.height*.03, width:style.width, transform: [{ translateY: headerHeight }] }}>
        <View style={{flex:1, width:style.width}}></View>
        <Text style={{fontFamily: "Inter-Black", fontSize:style.fonted*.044, color:'white', marginBottom:style.height*.007}}>October</Text>
        <Weekday
          scrollState = {scrollState}
          scrollToView1={() => reduxScroll()}
          scrollToView2={() => scrollToView(2)}
          scrollToView3={() => scrollToView(3)}
          scrollToView4={() => scrollToView(4)}
          scrollToView5={() => scrollToView(5)}
          scrollToView6={() => scrollToView(6)}
          scrollToView7={() => scrollToView(7)}
        />
      </Animated.View>



        <Animated.View style={{borderTopLeftRadius:style.width*.04,borderTopRightRadius:style.width*.04, position:'absolute',top:0, left:0, right:0 ,backgroundColor:'white', height:yOffset/2.3, width:style.width ,transform: [{ translateY: headerHeight }], opacity:headerOpacity, alignItems:'center' }} >
          <TouchableOpacity style={{position:'absolute', bottom:style.height*.005, flexDirection:'row', alignItems:'center', justifyContent:'center', padding:style.width*.02}} onPress={() => upFunction2()}>
            <Entypo name="location-pin" size={style.fonted*.04} color="black" />
            <Text maxFontSizeMultiplier={1} style={{fontFamily: "Inter-Black", fontSize:style.fonted*.04}}>  {location}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{position:'absolute', top:style.height*.015+getStatusBarHeight(), right:style.height*.02, backgroundColor:style.color.orange, paddingLeft:style.width*.02, paddingRight:style.width*.02,paddingTop:style.width*.005,paddingBottom:style.width*.005,borderRadius:style.width*.05,}} onPress={() => upFunction()}>
            <Text maxFontSizeMultiplier={1} style={{fontFamily: "Inter-Black", color:'white', fontSize:style.fonted*.032}}>buy classes</Text>
          </TouchableOpacity>
        </Animated.View>


    </View>


  ));
}
