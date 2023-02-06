import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native'

export default QrTime = function () {
    return (
        <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
            <View style={{ justifyContent: 'center' }}>
                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                <Image style={styles.textQR} source={require('../images/quetQR.png')} />
                <ImageBackground style={styles.qr} source={require('../images/qrcode.png')} />
                <Image style={styles.btnXacnhan} source={require('../images/xacnhan.png')} />

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center',
    },
    textQR: {
        width: 330,
        height: 37,
        marginTop: 30,
        alignSelf: 'center',
    },
    qr: {
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 50
    },
    btnXacnhan: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    }
})
