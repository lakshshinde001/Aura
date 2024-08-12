import { StyleSheet, Text, View, ScrollView, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { ScrollView } from 'react-native-gesture-handler'
import {images} from '../../constants'
import FormField from '../../components/formField'
import { formatDiagnostic } from 'typescript'
import CustomButton from '../../components/customButton'
import { Link } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'

const SignIn = () => {

  const [form, setForm] = useState({
    email : '',
    password : ''
  })
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if(form.email === "" || form.password === ""){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setSubmitting(true);

    try {
       await signIn(form.email, form.password);
       const result = await getCurrentUser();
       setUser(result);
       setLoggedIn(true);
      //set it to global state
      Alert.alert('Success', "userLogged in Successful")
      router.replace('/home')

    } catch (error) {
      Alert.alert('Error', error.message);
    }finally {
      setSubmitting(false); 
    }

    // createUser();
  }



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
          <CustomButton
              title="Sign in"
              handlePress={submit}
              containerStyles={{marginTop: 20}}
              isLoading={submitting}
          />

          <View style={styles.dontHaveAccount}>
            <Text style={styles.dontHaveAccountText}>
              Don't Have an Account?
            </Text>
            <Link href="/sign-up" style={{fontSize : 20, color : '#FFA001', marginTop : 5}} >
              Sign-up
            </Link>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  dontHaveAccountText : {
    fontSize : 20,
    color : 'white',
    marginTop : 5

  },
  dontHaveAccount : {
    justifyContent : 'center',
    paddingTop : 5,
    flexDirection : 'row',
    gap : 2
  },
  safeAreaView: {
    backgroundColor : '#161622',
    height : '100%'
  },
  mainView : {
    width : '100%',
    // justifyContent : 'center',
    // alignItems : 'center',
    padding : 30,
    marginTop : 130,
    marginBottom : 16
  },
  imageStyle : {
    width : 115,
    // height : '100%'
    height : 35,
    marginTop : 20,
  }, 
  textStyle : {
    fontSize : 24,
    color : 'white',
    marginTop : 30,
    // fontFamily: 'poppins'
    fontWeight : 'bold'
  }
})