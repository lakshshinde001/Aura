import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../constants'
import CustomButton from '../components/customButton'



const { height } = Dimensions.get('window');
const minnHeight = height * 0.85;


const App = () => {

  

  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView contentContainerStyle={{height : '100%'}}>
        <View style= {styles.mainText}>
          <Image 
            style= {styles.imgStyle}
            source={images.logo}
          />
          <Image
            style= {styles.cardStyle}
            source={images.cards}
          />

        <View style={{position :'relative', marginTop : 5}}>
          <Text style={styles.heroText}>
            Discover Endless Possibilities with {''}
            <Text style={{color : '#FFA001'}}>
              Aora
            </Text>
            <Image
              style={styles.pathIcon}
              source={images.path}
              resizeMethod='contain'
              
            />    
          </Text>
          <Text style={styles.secondaryText}>
              Where Creativity meet innovation : embark on a journey of limitless exploration with Aora
          </Text>
          
        </View>
        <CustomButton
            title={"Continue with Email"}
            containerStyles={{ width: '100%' ,marginTop : 30}}
            handlePress={()=> router.push('/sign-in') }
            textStyles={{fontWeight : 'bold'}}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
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
    },
    SafeArea : {
      backgroundColor : '#161622',
      height : '100%'
    },
    mainText : {
      width : '100%',
      // justifyContent : 'center',
      alignItems : 'center',
      height : '100%',
      // minHeight : minnHeight,
      paddingLeft : 16,
      paddingRight : 16,
      justifyContent: 'center'
    },
    imgStyle : {
      width : 130,
      height : 84,
      resizeMode : 'contain'
    },
    cardStyle : {
      maxWidth : 380,
      width : '100%',
      height : 300,
      resizeMode : 'contain'
    },
    heroText : {
      fontSize : 30,
      color : 'white',
      fontWeight : 'bold',
      textAlign : 'center'
    },
    pathIcon : {
      width : 136,
      height : 15,
      position : 'absolute',
      marginRight : -8,
      marginBottom : -8
    },
    secondaryText : {
      fontSize : 14,
      marginTop : 7,
      textAlign : 'center',
      color : '#f7fafc'
    }
})