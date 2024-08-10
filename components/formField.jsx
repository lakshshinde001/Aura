import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { isWhiteSpaceLike } from 'typescript'
// import { TextInput } from 'react-native-gesture-handler'

import { icons } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
        <Text style={styles.textt} >
            {title}
        </Text>

        <View style={styles.containers}>
            <TextInput
                style={styles.textInputStyle}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#7b7b8b'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />

            

        </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    textt : {
        color : 'white'
    },
    containers : {
        borderWidth : 2,
        borderColor: 'black',
        width: '100%',
        height : 64,
        paddingHorizontal : 16,
        backgroundColor : '#f5f5f5',
        borderRadius : 16,
        justifyContent : 'center'
    }, 
    focused : {
        borderColor : "#3b82f6"
    },
    textInputStyle : {
        flex : 1,
        color : 'black'
    }
})