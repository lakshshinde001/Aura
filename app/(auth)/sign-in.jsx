import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { ScrollView } from 'react-native-gesture-handler'
import {images} from '../../constants'
import FormField from '../../components/formField'
import { formatDiagnostic } from 'typescript'

const SignIn = () => {

  const [form, setForm] = useState({
    email : '',
    password : ''
  })

  return (
    <SafeAreaView style={styles.safeAreaView} >
      <ScrollView>
        <View style={styles.mainView} >
          <Image
            source={images.logo}
            resizeMethod='contain'
            style={styles.imageStyle}
          />

          <Text style={styles.textStyle}>
            Log in to Aora 
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText ={(e) => setForm({...form,
              email : e
            })}
            otherStyles={{marginTop : 7, }}
            keyBoardType= 'email-address'
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText ={(e) => setForm({...form,
              password : e
            })}
            otherStyles={{marginTop : 7, }}
            // keyBoardType= 'email-address'  
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor : '#161622',
    height : '100%'
  },
  mainView : {
    width : '100%',
    // justifyContent : 'center',
    // alignItems : 'center',
    padding : 4,
    marginTop : 16,
    marginBottom : 16
  },
  imageStyle : {
    width : 115,
    // height : '100%'
    height : 35
  }, 
  textStyle : {
    fontSize : 24,
    color : 'white',
    marginTop : 30,
    // fontFamily: 'poppins'
    fontWeight : 'bold'
  }
})