import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { getBottomSpace, getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'
import { useDispatch, useSelector  } from 'react-redux';
import { AppLoading } from 'expo';
import { FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';

import TabBar from "./fluid";


const color1 = "#e77b28"
const bottomLip = getBottomSpace();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const baseWidth = 414;
const baseHeight = 862;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const fonted = Math.min(scaleWidth*415, scaleHeight*415);
let customFonts = {
    'Inter-Black-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Inter-Black': require('../../../assets/fonts/Roboto-Regular.ttf'),
};

export const Tab1 = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();

  const  _cacheResourcesAsync = async () => {
    await Font.loadAsync(customFonts);
  }

  const [count, setCount] = useState(10);
  const [isReady, setReady] = useState(false);



  return (
     isReady === false ? ( <AppLoading
      startAsync={_cacheResourcesAsync}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />) :(
      <View style={{position:'absolute', bottom:0, left:0, right:0, backgroundColor:color1, paddingTop:height*.007,...ifIphoneX({paddingBottom: 25}, {paddingBottom: 0})}}>
        <TabBar
          onPress={tabIndex => {
            if (tabIndex==0) {
              props.mainState1()
            }
            else if (tabIndex==1) {
              props.mainState2()
            }
            else if (tabIndex==2) {
              console.log('two')
              props.mainState3()
            }
            else if (tabIndex==3) {
              console.log('three')
              props.mainState4()
            }
            console.log("render component with index: ", tabIndex);
          }}
          values={[
            { title: "Today", icon: require("../../../assets/fluidIcons/leader.png") },
            { title: "Schedule", icon: require("../../../assets/fluidIcons/events.png") },
            { title: "Studios", icon: require("../../../assets/fluidIcons/location.png") },
            { title: "Video", icon: require("../../../assets/fluidIcons/video.png") },
          ]}
        />
        <View style={{position:'absolute', bottom:0, left:0, right:0, height:25, backgroundColor:'#e77b28'}}></View>
      </View>

  ));
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    borderRadius: width*.04,
  },
});
