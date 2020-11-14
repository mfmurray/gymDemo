import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';



export const Video = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();



  return (

    <View style={styles.container}>
      <Text>Workout Videos</Text>
    </View>


  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
