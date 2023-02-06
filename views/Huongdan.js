import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'

export default Huongdan = ({ navigation }) => {
    return (
        <View style={{ height: 900, backgroundColor: '#EAF0F8', }} >

            <View style={{ justifyContent: 'center' }}>
                <Image style={styles.Aqua} source={require('../images/aquafina.png')} />
                <Image style={styles.thamgia} source={require('../images/huongdanthamgia.png')} />
                <ImageBackground style={styles.bgxoay} source={require('../images/backgroundxoay.png')}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Welcome');
                    }}>
                        <Image style={{ width: 36, height: 36, marginLeft: 10, marginTop: 6 }}
                            source={require('../images/btnBack.png')} />
                    </TouchableOpacity>
                </ImageBackground>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Star');
                }}>
                    <Image style={styles.btnXacnhan} source={require('../images/xacnhan.png')} />
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
    thamgia: {
        width: 330,
        height: 30,
        marginTop: 15,
        alignSelf: 'center',
    },
    bgxoay: {
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
