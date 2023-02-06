import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'

export default Thankyou = function () {
    return (
        <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
            <View style={{ justifyContent: 'center' }}>
                

                <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                    <Image style={styles.textcamon} source={require('../images/textcamon.png')} />
                    <Image style={styles.btnXacnhan} source={require('../images/xacnhan.png')} />
                </ImageBackground>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center'
    },
    bgcamon: {
        width: 'auto',
        height: 895,
    },
    textcamon: {
        width: 400,
        height: 500,
        alignSelf: 'center',
        marginTop: 30,
    },
    btnXacnhan: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    }
})
