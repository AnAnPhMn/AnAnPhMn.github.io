import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'

export default AddPoint = function () {
    return (
        <View style={{ height: 900}} >
            <View style={{ justifyContent: 'center' }}>
                <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                    <Image style={styles.tichdiem} source={require('../images/tichdiem.png')}/>
                    <Image style={styles.textCamera} source={require('../images/camera.png')}/>
                    <Image style={styles.btnTichdiem} source={require('../images/btnTichdiem.png')}/>         
                    <Image style={styles.btnKhong} source={require('../images/btnKhong.png')}/>            
   
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
tichdiem:{
    width:300,
    height:60,
    alignSelf:'center',
    marginTop:200,
    
},
textCamera:{
    alignSelf:'center',
    width:220,
    height:35,
    marginTop:30
},
btnTichdiem:{
    width: 150,
    height: 150,
    alignSelf:'center',
    marginTop:20
},
btnKhong:{
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:20,
    borderRadius:50
},
})
