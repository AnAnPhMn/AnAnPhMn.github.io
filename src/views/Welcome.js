import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'

export default Welcome = function () {
    return (
        <View style={styles.fullScreen}>

            <View>
                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                <Image style={styles.content} source={require('../images/content.png')} />
                <ImageBackground style={styles.nguoimau} source={require('../images/thanhhang.png')}>
                    <Image style={styles.btnStart} source={require('../images/start.png')} />
                </ImageBackground>
                <Image style={styles.qr} source={require('../images/qr.png')} />
                <Image style={styles.bar} source={require('../images/frame.png')} />
                <Image style={styles.khauhieu} source={require('../images/khauhieu.png')} />


            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    fullScreen: {
        width: 'auto',
        height: 900,
        backgroundColor: '#EAF0F8'
    },
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        marginLeft: 145,
    },
    content: {
        width: 330,
        height: 150,
        marginLeft: 35,
        marginTop: 30,
    },
    nguoimau: {
        position:'absolute',
        width: 400,
        height: 700,
        marginTop:70,
        
    },
    btnStart: {
        width: 150,
        height: 150,
        marginLeft: 130,
        marginTop:480
    },
    qr: {
        position: 'absolute',
        width: 70,
        height: 70,
        marginLeft: 310,
        marginTop: 600
    },
    bar: {
        width: 420,
        height: 20,
        marginTop:482
    },
    khauhieu: {
        position: 'absolute',
        width: 220,
        height: 23.5,
        marginTop:700,
        marginLeft:100,
    },



})
