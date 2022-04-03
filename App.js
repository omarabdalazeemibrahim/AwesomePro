import React, { useContext } from 'react'
import { View, StyleSheet, Text, StatusBar, useWindowDimensions } from 'react-native'
import Tabs from './Components/Tabs';
import { NewsContext } from './API/Context';
import Navigation from './Components/Navigation';


function App() {

  return (
    <View style={{ ...styles.container, backgroundColor="#282C35" }}>
      <Navigation />
    </View>
  )
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,

    }
  }
)

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}