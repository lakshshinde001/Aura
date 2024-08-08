import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App </Text>
      <StatusBar style='auto'/>
      <Link href="/home" style={{color:'blue'}} > Go To Home</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
      fontSize : 30
    }
})