import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Animated } from 'react-native';
import { Octicons, FontAwesome5, Ionicons, AntDesign, Feather, FontAwesome,Entypo, MaterialIcons,MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector  } from 'react-redux';
import {style} from "../../../styles"





export const Day = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();

  var dayString = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  var tabbed = Math.floor(props.tab/7)
  var randy = dayString[props.tab-tabbed*7]

  return (

    <View style={{width:style.width, alignItems:'center', justifyContent:'center'}}>
      <View style={{flexDirection:'row-reverse', width:style.width, height:style.height*.06, alignItems:'center'}}>
        <Text style={{fontSize:style.fonted*.047, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#7d7d7d'}}>{randy}, October {props.tab+1}, 2020</Text>
      </View>

      <View style={{width:style.width, height:style.height*.15, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
        <View style={{position:'absolute', top:style.width*.03, left:style.width*.03}}>
          <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#5e5e5e'}}>6:30 AM</Text>
        </View>

        <View style={{flexDirection:'row', width:style.width, paddingTop:style.height*.03, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:style.color.grey2, width:style.width*.12, height:style.width*.12, borderRadius:style.width*.06, marginLeft:style.width*.1, alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="ios-person" size={style.width*.1} color="white" />
            </View>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'#5e5e5e'}}>  Class Type</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:style.color.orange, marginRight:style.width*.08, paddingTop:style.width*.013, paddingLeft:style.width*.03, paddingBottom:style.width*.013, paddingRight:style.width*.03, borderRadius:style.width*.015,shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,}} onPress={() => console.log(props.tab) }>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'white'}}>Waitlist</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width:style.width, height:style.height*.15, backgroundColor:'white', alignItems:'center', justifyContent:'center', marginTop:style.height*.003}}>
        <View style={{position:'absolute', top:style.width*.03, left:style.width*.03}}>
          <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#5e5e5e'}}>9:30 AM</Text>
        </View>

        <View style={{flexDirection:'row', width:style.width, paddingTop:style.height*.03, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:style.color.grey2, width:style.width*.12, height:style.width*.12, borderRadius:style.width*.06, marginLeft:style.width*.1, alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="ios-person" size={style.width*.1} color="white" />
            </View>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'#5e5e5e'}}>  Class Type</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:style.color.orange, marginRight:style.width*.08, paddingTop:style.width*.013, paddingLeft:style.width*.03, paddingBottom:style.width*.013, paddingRight:style.width*.03, borderRadius:style.width*.015,shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,}} onPress={() => console.log(props.tab) }>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'white'}}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width:style.width, height:style.height*.15, backgroundColor:'white', alignItems:'center', justifyContent:'center', marginTop:style.height*.003}}>
        <View style={{position:'absolute', top:style.width*.03, left:style.width*.03}}>
          <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#5e5e5e'}}>1:30 PM</Text>
        </View>

        <View style={{flexDirection:'row', width:style.width, paddingTop:style.height*.03, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:style.color.grey2, width:style.width*.12, height:style.width*.12, borderRadius:style.width*.06, marginLeft:style.width*.1, alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="ios-person" size={style.width*.1} color="white" />
            </View>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'#5e5e5e'}}>  Class Type</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:style.color.orange, marginRight:style.width*.08, paddingTop:style.width*.013, paddingLeft:style.width*.03, paddingBottom:style.width*.013, paddingRight:style.width*.03, borderRadius:style.width*.015,shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,}} onPress={() => console.log(props.tab) }>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'white'}}>Waitlist</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width:style.width, height:style.height*.15, backgroundColor:'white', alignItems:'center', justifyContent:'center', marginTop:style.height*.003}}>
        <View style={{position:'absolute', top:style.width*.03, left:style.width*.03}}>
          <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#5e5e5e'}}>3:30 PM</Text>
        </View>

        <View style={{flexDirection:'row', width:style.width, paddingTop:style.height*.03, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:style.color.grey2, width:style.width*.12, height:style.width*.12, borderRadius:style.width*.06, marginLeft:style.width*.1, alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="ios-person" size={style.width*.1} color="white" />
            </View>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'#5e5e5e'}}>  Class Type</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:style.color.orange, marginRight:style.width*.08, paddingTop:style.width*.013, paddingLeft:style.width*.03, paddingBottom:style.width*.013, paddingRight:style.width*.03, borderRadius:style.width*.015,shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,}} onPress={() => console.log(props.tab) }>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'white'}}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width:style.width, height:style.height*.15, backgroundColor:'white', alignItems:'center', justifyContent:'center', marginTop:style.height*.003}}>
        <View style={{position:'absolute', top:style.width*.03, left:style.width*.03}}>
          <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", marginRight:style.width*.03, color:'#5e5e5e'}}>6:00 PM</Text>
        </View>

        <View style={{flexDirection:'row', width:style.width, paddingTop:style.height*.03, alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{backgroundColor:style.color.grey2, width:style.width*.12, height:style.width*.12, borderRadius:style.width*.06, marginLeft:style.width*.1, alignItems:'center', justifyContent:'center'}}>
              <Ionicons name="ios-person" size={style.width*.1} color="white" />
            </View>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'#5e5e5e'}}>  Class Type</Text>
          </View>
          <TouchableOpacity style={{backgroundColor:style.color.orange, marginRight:style.width*.08, paddingTop:style.width*.013, paddingLeft:style.width*.03, paddingBottom:style.width*.013, paddingRight:style.width*.03, borderRadius:style.width*.015,shadowColor: "#000",
            shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.23,shadowRadius: 2.62,elevation: 4,}} onPress={() => console.log(props.tab) }>
            <Text style={{fontSize:style.fonted*.04, fontFamily: "Inter-Black", color:'white'}}>Waitlist</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>


  );
}
