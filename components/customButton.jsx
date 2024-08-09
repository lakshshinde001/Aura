import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        style= {[styles.container, containerStyles, isLoading && styles.loading ]}
        onPress={handlePress}
        activeOpacity={0.7}    
        disabled={isLoading}
    >
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonText : {
        // color : '#161622',
        fontSize : 18,
        color : '#161622',
        // backgroundColor : '#FFA001'
    },
    container : {
        backgroundColor : '#FFA001',
        borderRadius : 12,
        minHeight : 62,
        justifyContent : 'center',
        alignItems : 'center'
    },
    loading : {
        opacity : 0.5
    }

})