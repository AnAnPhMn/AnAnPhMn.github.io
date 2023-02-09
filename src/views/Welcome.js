import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, onPress, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default Welcome =  ({navigation}) => {
    return (
        <View>
            <View style={styles.fullScreen}>

                <ImageBackground style={styles.nguoimau} source={require('../images/thanhhang.png')}>
                    <TouchableOpacity onPress={()=> {
                        navigation.navigate('Huongdan');
                    }}>
                        <Image style={styles.btnStart} source={require('../images/start.png')}/>
                    </TouchableOpacity>
                    <Image style={styles.khauhieu} source={require('../images/khauhieu.png')} />
                    <Image style={styles.qr} source={require('../images/qr.png')} />
                </ImageBackground>

                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                    <Image style={styles.content} source={require('../images/content.png')} />
                </View>

            </View>

            <View style={styles.footer}>
                <Image style={styles.fb} source={require('../images/facebook.png')} />
                <Text style={styles.aquavn}>Aquafina Vietnam</Text>
                <Text style={styles.aquapepsi}>Aquafina.pepsishop.vn</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    fullScreen: {
        width: 'auto',
        height: 850,
        backgroundColor: '#EAF0F8'
    },
    Aqua: {
        width: 132,
        height: 43,
        marginTop: 50,
        alignSelf: 'center'
    },
    content: {
        width: 330,
        height: 150,
        alignSelf: 'center',
        marginTop: 30,
    },
    nguoimau: {
        position: 'absolute',
        width: 420,
        height: 780,
        alignSelf: 'center',
        marginTop: 100,

    },
    btnStart: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 545,
    },
    qr: {
        position: 'absolute',
        width: 50,
        height: 50,
        marginLeft: 350,
        marginTop: 670
    },

    khauhieu: {
        position: 'absolute',
        width: 220,
        height: 23.5,
        marginTop: 700,
        alignSelf: 'center',
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#1545A5',
        height: 70,

    },
    fb: {
        width: 20,
        height: 20,
        marginLeft: 20,
        marginTop: 10
    },
    aquavn: {
        color: 'white',
        marginTop: 13,
        marginLeft: 5,
        fontSize: 12
    },
    aquapepsi: {
        color: 'white',
        marginTop: 13,
        marginLeft: 100,
        fontSize: 12
    }



})
