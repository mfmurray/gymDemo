import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import {style} from "../../styles"




export const Popup2 = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();



  return (

    <View style={styles.container}>
      <View style={{width:style.width, backgroundColor:'rgba(0, 0, 0, 0.05)', alignItems:'center', justifyContent:'space-between', padding:style.width*.02, flexDirection:'row'}}>
        <TouchableOpacity style={{}} onPress={() => props.onPress()}>
          <Feather name="x" size={style.width*.06} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', padding:style.width*.02}}>
          <Text maxFontSizeMultiplier={1} style={{fontSize:style.fonted*.045}}>Buy Classes</Text>
        </View>
        <TouchableOpacity style={{}} >
          <Feather name="x" size={style.width*.06} color="transparent" />
        </TouchableOpacity>
      </View>
    </View>


  );
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    borderRadius: style.width*.04,
    alignItems: 'center',
  },
});
