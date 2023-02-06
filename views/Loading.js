import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'

export default Loading = ({ navigation }) => {
    return (
        <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >
            <View style={{ justifyContent: 'center' }}>
                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                <Image style={styles.xuly} source={require('../images/xuly.png')} />
                <ImageBackground style={styles.bgloading} source={require('../images/bgloading.png')}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Star');
                    }}>
                        <Image style={{ width: 36, height: 36, marginLeft: 10, marginTop: 6 }}
                            source={require('../images/btnBack.png')} />
                    </TouchableOpacity>
                </ImageBackground>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('QrCode');
                }}>
                    <Image style={styles.btnHoantat} source={require('../images/hoantat.png')} />
                </TouchableOpacity>
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
    xuly: {
        width: 330,
        height: 23,
        marginTop: 15,
        alignSelf: 'center',
    },
    bgloading: {
        width: 380,
        height: 430,
        alignSelf: 'center',
        marginTop: 50
    },
    btnHoantat: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    }
})
