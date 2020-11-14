import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Octicons, FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import {style} from "../../../styles"

import {Data} from './data';


let customFonts = {
    'Inter-Black-Bold': require('../../../../assets/fonts/Roboto-Bold.ttf'),
    'Inter-Black': require('../../../../assets/fonts/Roboto-Regular.ttf'),
};


export const LeaderBoard = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();

  const  _cacheResourcesAsync = async () => {
    await Font.loadAsync(customFonts);
  }

  const [isReady, setReady] = useState(false);



  return (
     isReady === false ? ( <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />) :(

    <View style={styles.container}>

      <View style={{alignItems:'center'}}>
        <View style={{width:style.width, flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:Constants.statusBarHeight+style.height*.01}}>
          <TouchableOpacity style={{padding:10,}} onPress={() => props.onPress()}>
            <SimpleLineIcons name="menu" size={style.width*.055} color={style.color.orange} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop:style.height*.03, borderTopWidth:1, borderColor:style.color.grey, width:style.width, justifyContent:'center', paddingTop:style.height*.01, paddingBottom:style.height*.01}}>
          <Text maxFontSizeMultiplier={1} style={{ fontFamily:'Inter-Black', fontSize:style.fonted*.044, marginLeft:style.width*.05}}>Leaderboard</Text>
      </View>

      <Data/>
    </View>


  ));
}





const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
