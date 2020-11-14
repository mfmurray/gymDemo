import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';




export const Locations = (props) => {
  const user = useSelector(state => state.settingsReducer.user);
  const dispatch = useDispatch();

  return (

    <View style={styles.container}>
      <Text>Find a Studio</Text>
    </View>


  );
}





const styles = StyleSheet.create({
  container: {
    height:'70%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
