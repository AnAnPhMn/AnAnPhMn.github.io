import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, Button } from 'react-native'

export default Thanks = function () {
    return (
        <View style={{ height: 900 }} >
            <View style={{ justifyContent: 'center' }}>
                <ImageBackground style={styles.bgcamon} source={require('../images/bgxoay.png')}>
                    <Image style={styles.tramtaisinh} source={require('../images/tramtaisinhvuong.png')} />
                    <Image style={styles.textThemtg} source={require('../images/themthoigian.png')} />
                    <Image style={styles.textDemtg} source={require('../images/demthoigian.png')} />

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={styles.btn1} source={require('../images/btnManhinhchinh.png')} />
                        <Image style={styles.btn2} source={require('../images/btnThemtg.png')} />
                    </View>

                </ImageBackground>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    bgcamon: {
        width: 'auto',
        height: 895,
    },
    tramtaisinh: {
        alignSelf: 'center',
        marginTop: 50,
    },
    textThemtg: {
        alignSelf: 'center',
        width: 310,
        height: 35,
        marginTop: 30
    },
    textDemtg: {
        alignSelf: 'center',
        width: 320,
        height: 15,
        marginTop: 30
    },
    btn1: {
        width: 150,
        height: 45,
        marginTop: 50,
        alignSelf: 'center'
    },
    btn2: {
        width: 150,
        height: 45,
        marginTop: 50,
        alignSelf: 'center'

    },
})
