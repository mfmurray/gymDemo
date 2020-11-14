import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import {style} from "../../../styles"



const dayColor = 'white'
const dayColorNot = '#8c572e'


export const Weekday = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const location = useSelector(state => state.settingsReducer.location);
  const scrollIndex = useSelector(state => state.settingsReducer.scrollIndex);
  const dispatch = useDispatch();

  const [scrollState, setScrollState] = useState(1);

  function reduxScroll(tab) {
    dispatch({ type: 'REDUX_SCROLL', scrolled:tab })
  }

  useLayoutEffect(() => {
    var number = Math.floor(props.scrollState/7.1)
      scrollViewRef.current.scrollTo({x: style.width*number, duration:200, animated: true,})
  }, [props.scrollState]);

  function scrollToView(tab) {
    if (tab==1) {
      props.scrollToView1()
    }
    if (tab==2) {
      props.scrollToView2()
    }
    if (tab==3) {
      props.scrollToView3()
    }
    if (tab==4) {
      props.scrollToView4()
    }
    if (tab==5) {
      props.scrollToView5()
    }
    if (tab==6) {
      props.scrollToView6()
    }
    if (tab==7) {
      props.scrollToView7()
    }
  }

  function tabView(tab) {
      return (
        <View style={{flexGrow:1, width:style.width, flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginBottom:style.height*.01}}>
          {[...Array(7).keys()].map((datum) => {
            return dayView([datum, tab]);
          })}
        </View>
        )
  }
  function dayView(tab) {
    var weekString = ["M","T","W","T","F","Sa","Su"]
      return (
          <TouchableOpacity style={{width:style.width*.07, alignItems:'center', justifyContent:'center'}} onPress={() => reduxScroll(tab[0]+7*tab[1]+1) }>
            <Text maxFontSizeMultiplier={1} style={{marginBottom:style.height*.005, color:(props.scrollState==(tab[0]+7*tab[1]+1) ? dayColor:dayColorNot)}}>{weekString[tab[0]]}</Text>
            <View style={{width:style.width*.07, height:style.width*.07, backgroundColor:(props.scrollState!==(tab[0]+7*tab[1]+1) ? style.color.grey3:'white'), borderRadius:style.width*.035, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:style.fonted*.03}}>{tab[0]+7*tab[1]+1}</Text>
            </View>
          </TouchableOpacity>
        )
  }

  const scrollViewRef = useRef();


  return (

    <View style={{width:style.width, flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginBottom:style.height*.001}}>
      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}} ref={scrollViewRef}>

      {[...Array(4).keys()].map((datum) => {
        return tabView(datum);
      })}

      </ScrollView>
    </View>


  );
}





const styles = StyleSheet.create({
  container: {

  },
});
