import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return(
    <View style={styles.view}>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={styles.image}
      />
      <Text style={{color : color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#FFA001',     //Yello 
        tabBarInactiveTintColor : '#CDCDEO',  //Inactive color
        tabBarStyle : {
          backgroundColor: '#161622',  //Primary Color
          borderTopWidth : 1,
          borderTopColor : '#232533',
          height : 84,
        }
      }}
    >
      <Tabs.Screen name='home' 
        options={{
          title: "Home",
          headerShown:false,
          tabBarIcon : ({color, focused}) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }} 
      />
      <Tabs.Screen name='bookmark' 
        options={{
          title: "Bookmark",
          headerShown:false,
          tabBarIcon : ({color, focused}) => (
            <TabIcon 
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          )
        }} 
      />
      <Tabs.Screen name='create' 
        options={{
          title: "Create",
          headerShown:false,
          tabBarIcon : ({color, focused}) => (
            <TabIcon 
              icon={icons.upload}
              color={color}
              name="Create"
              focused={focused}
            />
          )
        }} 
      />
      <Tabs.Screen name='profile' 
        options={{
          title: "Profile",
          headerShown:false,
          tabBarIcon : ({color, focused}) => (
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }} 
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  image : {
    width: 25,
    height : 25
  },
  view : {
    alignItems : 'center',
    justifyContent : 'center',
    gap: 2
  }
  
})