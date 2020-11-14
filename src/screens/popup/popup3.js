import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import {style} from "../../styles"




export const Popup3 = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const location = useSelector(state => state.settingsReducer.location);
  const dispatch = useDispatch();


  function changeLocation(tab) {
    dispatch({ type: 'REDUX_LOCATION', locate: tab})
    props.onPress()
  }

  function tabView(tab) {
    var string = 'location '+tab
      return (
        <TouchableOpacity style={{marginTop:style.height*.009, paddingTop:style.height*.003, paddingBottom:style.height*.003, width:style.width*.4}} onPress={() => changeLocation(string)}>
          <Text maxFontSizeMultiplier={1} style={{ fontSize:style.fonted*.06}}>Location {tab}</Text>
        </TouchableOpacity>
        )
  }



  return (

    <View style={styles.container}>
      <View style={{width:style.width, backgroundColor:'rgba(0, 0, 0, 0.05)', alignItems:'center', justifyContent:'space-between', padding:style.width*.02, flexDirection:'row'}}>
        <TouchableOpacity style={{}} onPress={() => props.onPress()}>
          <Feather name="x" size={style.width*.06} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', padding:style.width*.02}}>
          <Entypo name="location-pin" size={style.fonted*.045} color="black" />
          <Text style={{fontSize:style.fonted*.045}}>  {location}</Text>
        </View>
        <TouchableOpacity style={{}} >
          <Feather name="x" size={style.width*.06} color="transparent" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex:1, marginLeft:style.width*.04}}>
        <TouchableOpacity style={{marginTop:style.height*.02, paddingTop:style.height*.003, paddingBottom:style.height*.003,}} onPress={() => changeLocation("Detroit, Mi")}>
          <Text maxFontSizeMultiplier={1} style={{ fontSize:style.fonted*.06}}>Detroit, Mi</Text>
        </TouchableOpacity>
        {[...Array(7).keys()].map((datum) => {
          return tabView(datum);
        })}


      </ScrollView>
    </View>


  );
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    borderRadius: style.width*.04,
  },
});
