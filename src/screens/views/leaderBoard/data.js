import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import {style} from "../../../styles"





export const Data = (props) => {

  const user = useSelector(state => state.settingsReducer.user);
  const location = useSelector(state => state.settingsReducer.location);
  const dispatch = useDispatch();

  const [scrollState, setScrollState] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;


  function tabView(tab) {
    var tab2 = tab
    if (tab2==0) {
      tab2 = ''
    }
      return (
        <View style={{width:style.width*.2, borderTopWidth: (tab==0 ? 0:1), borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
          <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.038}}>{tab2}</Text>
        </View>
        )
  }
  function tabView2(tab) {
      return (
        <View style={{flexDirection:'row'}}>
          <View style={{width:style.width*.2, borderTopWidth:1, borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.033}}>tab1 {tab}</Text>
          </View>
          <View style={{width:style.width*.2, borderTopWidth:1,borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.033}}>tab2 {tab}</Text>
          </View>
          <View style={{width:style.width*.2, borderTopWidth:1,borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.033}}>tab3 {tab}</Text>
          </View>
          <View style={{width:style.width*.2, borderTopWidth:1,borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.033}}>tab4 {tab}</Text>
          </View>
          <View style={{width:style.width*.2, borderTopWidth:1,borderColor:style.color.grey, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.033}}>tab5 {tab}</Text>
          </View>
        </View>
        )
  }
  function tabTitle(tab) {
      return (
        <View style={{flexDirection:'row', backgroundColor:'white'}}>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab1</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab2</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab3</Text>
          </View>
          <View style={{width:style.width*.2,  height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab4</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab5</Text>
          </View>
        </View>
        )
  }
  function tabTitle2(tab) {
      return (
        <View style={{flexDirection:'row', backgroundColor:'white'}}>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab1</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab2</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab3</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab4</Text>
          </View>
          <View style={{width:style.width*.2, height:style.height*.05, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
            <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black-Bold', fontSize:style.fonted*.033}}>tab5</Text>
          </View>
        </View>
        )
  }

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }]);
  const onScroll2 = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);

  const scrollX2 = scrollX.interpolate({inputRange: [0, 1000],outputRange: [0, -1000],extrapolate: 'clamp'})

  const scrollY2 = scrollY.interpolate({inputRange: [style.height*.03, style.height*.06],outputRange: [0, 1],extrapolate: 'clamp'})

  return (

    <View style={{width:style.width, alignItems:'center'}}>

      <View style={{height:style.height*.7,borderBottomWidth:1, borderTopWidth:1, borderColor:style.color.grey, }}>

        <ScrollView showsVerticalScrollIndicator={false} bounces={false}
        contentContainerStyle={{width:style.width, flexDirection:'row'}} onScroll={onScroll2} scrollEventThrottle={1}>
          <View style={{backgroundColor:'white',shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>

            {[...Array(30).keys()].map((datum) => {
              return tabView(datum);
            })}
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
            bounces={false}
            scrollEventThrottle={1}
            onScroll={onScroll}>
            <View>
            {tabTitle()}
            {[...Array(29).keys()].map((datum) => {
              return tabView2(datum);
            })}
            </View>
          </ScrollView>
        </ScrollView>
        <Animated.View style={{ position:'absolute', top:0, right:0, width:style.width*.8, transform: [{ translateX: scrollX2 }], backgroundColor:'white', opacity:scrollY2}}>
            {tabTitle2()}
        </Animated.View>
        <Animated.View style={{position:'absolute', top:0, left:0, width:style.width*.2, height:style.height*.05,backgroundColor:'white', opacity:scrollY2}}>
        </Animated.View>

        <Animated.View style={{borderBottomWidth:1, borderColor:style.color.grey, position:'absolute', top:0, left:0, width:style.width, height:style.height*.05, opacity:scrollY2}}>
        </Animated.View>

      </View>
    </View>


  );
}
