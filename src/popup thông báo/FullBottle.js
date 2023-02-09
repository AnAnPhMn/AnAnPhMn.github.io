import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'

export default fullBottle = function () {
    return (
        <View style={{ height: 90}} >
            <View style={{ justifyContent: 'center' }}>
                <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                    <Image style={styles.fullBottle} source={require('../images/full.png')}/>
                    <Image style={styles.btnXacnhan} source={require('../images/xacnhan.png')}/>            
                </ImageBackground>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
bgcamon:{
    width:'auto',
    height:895,
},
fullBottle:{
    width:300,
    height:120,
    alignSelf:'center',
    marginTop:300,
    
},
btnXacnhan:{
    width: 150,
    height: 150,
    alignSelf:'center',
    marginTop:20
}
})
